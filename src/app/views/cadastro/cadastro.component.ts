import { Photo } from './../../models/photo';
import { Profile } from './../../models/profile';
import { ProfileService } from './../../services/profile.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { distinctUntilChanged, EMPTY, switchMap, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/shared/interfaces/estado';
import { Cidade } from 'src/app/shared/interfaces/cidade';
import { DropdownService } from 'src/app/services/dropdown.service';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  imageURL: any;
  file: any;
  formProfile!: FormGroup;
  estados!: Estado[];
  cidades!: Cidade[];
  profile : Profile = new Profile();
  photo: Photo = new Photo();

  constructor(private formBuilder :FormBuilder,
              private dropDownService : DropdownService,
              private cepService : ConsultaCepService,
              private profileService: ProfileService) { }

  ngOnInit(): void {

    this.dropDownService.getEstados().subscribe(dados => this.estados = dados)

    this.formProfile = this.formBuilder.group({
      name:[null, Validators.required],
      birthDate:[null, Validators.required],
      email:[null, Validators.required],
      password:[null, Validators.required],
      zipCode:[null],
      street:[null],
      district:[null],
      number: [null],
      complement:[null],
      city: [null],
      state: [null],
    })

    this.formProfile.get('zipCode')?.statusChanges.pipe(
      distinctUntilChanged(),
      switchMap(status => status === 'VALID' ? this.cepService.consultarCEP(this.formProfile.get('zipCode')?.value) : EMPTY)
    ).subscribe( dados => dados ? this.patchForm(dados) : {});

    this.formProfile.get('state')?.valueChanges.pipe(
      map(estado => this.estados.filter(e => e.sigla === estado)),
      map(estados => estados && estados.length > 0 ? estados[0].id : EMPTY),
      switchMap((estadoId:any) => this.dropDownService.getCidades(estadoId))
    ).subscribe(cidades => this.cidades = cidades)
  }

  onFileChange(ev: any): void{

    const reader = new FileReader();

    reader.onload = (event:any) => this.imageURL = event.target.result;

    this.file = ev.target.files;

    reader.readAsDataURL(this.file[0]);
    // const file = (ev.target as HTMLInputElement).files![0];
    // this.formProfile.get('profilePicture')?.updateValueAndValidity();

    // const reader = new FileReader();

    // reader.onload = () =>{
    //   this.imageURL  = reader.result as string
    // }

    // reader.readAsDataURL(file);
  }
  toformData(){
    const f  = new FormData();
    f.append('file', this.file.name, this.file[0])

    return f;
  }
  onSubmit(){


    this.profile ={
      id: undefined,
      name : this.formProfile.get('name')?.value,
      email : this.formProfile.get('email')?.value,
      password : this.formProfile.get('password')?.value,
      birthDate : this.formProfile.get('birthDate')?.value,
      city : this.formProfile.get('city')?.value,
      complement : this.formProfile.get('complement')?.value,
      number: this.formProfile.get('number')?.value,
      state : this.formProfile.get('state')?.value,
      street: this.formProfile.get('street')?.value,
      zipCode: this.formProfile.get('zipCode')?.value,
      profilePicture : this.file[0]

    }

    if(this.formProfile.valid){
      return this.profileService.create(this.profile).subscribe(
       success => console.log('foi'),
       err => console.log('erro')
      )
    }

    return null;
  }
  patchForm(dados:any){
    this.formProfile.patchValue({
      street: dados.logradouro,
      district: dados.bairro,
      city: dados.localidade,
      state: dados.uf,
    })
  }
}
