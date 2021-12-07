import { Login } from './../../models/login';
import { Photo } from './../../models/photo';
import { ProfileService } from './../../services/profile.service';
import { Profile } from './../../models/profile';
import { map } from 'rxjs/operators';
import { DropdownService } from './../../services/dropdown.service';
import { Cidade } from './../../models/cidade';
import { Estado } from './../../models/estado';
import { ConsultaCepService } from './../../services/consulta-cep-service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, empty, EMPTY, switchMap } from 'rxjs';

@Component({
  selector: 'app-form-cadastro-profile',
  templateUrl: './form-cadastro-profile.component.html',
  styleUrls: ['./form-cadastro-profile.component.scss']
})
export class FormCadastroProfileComponent implements OnInit {

  formProfile: FormGroup = new FormGroup({})
  filePath : any;
  estados : Estado[] = [];
  cidades : Cidade[] = [];
  profile : Profile = new Profile();
  photo : Photo = new Photo();

  constructor(private formBuilder : FormBuilder,
              private cepService: ConsultaCepService,
              private dropDownService : DropdownService,
              private profileService : ProfileService) { }

  ngOnInit() {
    this.dropDownService.getEstados().subscribe( estados => this.estados = estados)

    this.formProfile = this.formBuilder.group({
      profilePicture: [null],
      nome: [null],
      email: [null],
      password: [null],
      birthDate: [null],
      cep:[null],
      rua:[null],
      numero:[null],
      complemento:[null],
      cidade:[null],
      estado:[null]


    })
    this.formProfile.get('cep')?.statusChanges
    .pipe(
      distinctUntilChanged(),
      switchMap(status => status === 'VALID' ?
      this.cepService.consultarCEP(this.formProfile.get('cep')?.value) : EMPTY)
    ).subscribe(dados => dados ? this.popularEndereco(dados) : {});

    this.formProfile.get('estado')?.valueChanges
    .pipe(
      map(estado => this.estados.filter(e => e.sigla === estado)),
      map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
      switchMap((estadoId: any) => this.dropDownService.getCidades(estadoId)),
    )
    .subscribe(cidades => this.cidades = cidades);
  }

  previewPhoto(e: Event){

    const file = (e.target as HTMLInputElement).files![0];
    console.log(file);
    this.formProfile.patchValue({
      profilePicture:file
    })


    this.formProfile.get('profilePicture')?.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () =>{
      this.filePath = reader.result as string;
    }
    this.photo = {
      id:undefined,
      fileName : file.name,
      binaryContent : reader.result,
      contentType : file.type
    }
    reader.readAsDataURL(file)
  }
  consultarCEP(){
    const cep = this.formProfile.get('cep')?.value;

    if(cep != null && cep !== ''){
      this.resetarForm()
       this.cepService.consultarCEP(cep).subscribe(dados => this.popularEndereco(dados));
    }
  }
  onSubmit(){


     const profile = {

      Login :{
        id:undefined,
        password: this.formProfile.get('password')?.value,
        email:this.formProfile.get('email')?.value,

      },
      ProfilePicture : this.photo,
      BirthDate : this.formProfile.get('birthDate')?.value,
      ZipCode: this.formProfile.get('cep')?.value,
      City: this.formProfile.get('cidade')?.value,
      Complement: this.formProfile.get('complemento')?.value,
      State: this.formProfile.get('estado')?.value,
      Name: this.formProfile.get('nome')?.value,
      Number:this.formProfile.get('numero')?.value,
      Street: this.formProfile.get('rua')?.value,
      Followings: undefined,
      Follows: undefined,
      PhotoAlbums: undefined,
      Posts : undefined,
      id:undefined
    }

    this.profileService.create(profile as Profile).subscribe(
      success => console.log('foi'),
    );

  }
  popularEndereco(dados:any){

    this.formProfile.patchValue({
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    )
  }

  resetarForm(){
    this.formProfile.patchValue({
      rua: null,
      complemento: null,
      bairro: null,
      cidade: null,
      estado: null
    })
  }

}
