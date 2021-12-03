import { map } from 'rxjs/operators';
import { DropdownService } from './../../services/dropdown.service';
import { Cidade } from './../../models/cidade';
import { Estado } from './../../models/estado';
import { ConsultaCepService } from './../../services/consulta-cep-service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, EMPTY, switchMap } from 'rxjs';

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

  constructor(private formBuilder : FormBuilder,
              private cepService: ConsultaCepService,
              private dropDownService : DropdownService) { }

  ngOnInit(): void {
    this.dropDownService.getEstados().subscribe( estados => this.estados = estados)

    this.formProfile = this.formBuilder.group({
      profilePicture: [null],
      nome: [null],
      email: [null],
      password: [null],
      birthDate: [null],
      endereco: this.formBuilder.group({
        cep:[null],
        rua:[null],
        number:[null],
        complemento:[null],
        cidade:[null],
        estado:[null]

      })
    })
    this.formProfile.get('endereco.cep')?.statusChanges.pipe(
      distinctUntilChanged(),
      switchMap(status => status === 'VALID' ?
      this.cepService.consultarCEP(this.formProfile.get('endereco.cep')?.value) : EMPTY)
    ).subscribe(dados => dados ? this.popularEndereco(dados) : {});

    this.formProfile.get('endereco.estado')?.valueChanges.pipe(
      map(estado => this.estados.filter(es => es.sigla === estado)),
      map(estados => estados && estados.length > 0 ? estados[0].id : EMPTY),
      switchMap((estadoID : any) => this.dropDownService.getCidades(estadoID))
    ).subscribe(cidades => this.cidades = cidades)
  }

  previewPhoto(e: Event){
    const file = (e.target as HTMLInputElement).files![0];

    this.formProfile.patchValue({
      profilePicture:file
    })

    this.formProfile.get('profilePicture')?.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () =>{
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
  consultarCEP(){
    const cep = this.formProfile.get('endereco.cep')?.value;

    if(cep != null && cep !== ''){
      this.cepService.consultarCEP(cep)
      .subscribe(dados => this.popularEndereco(dados))
    }
  }
  popularEndereco(dados:any){

    this.formProfile.patchValue({
      endereco:{
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

}
