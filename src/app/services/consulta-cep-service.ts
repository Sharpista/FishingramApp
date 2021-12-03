import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class ConsultaCepService {

  constructor(private _http: HttpClient){

  }

  consultarCEP(cep:string){
    cep = cep.replace(/\D/g,'');

    if(cep !== ''){
      const validaCEP = /^[0-9]{8}$/

      if(validaCEP.test(cep)){
        return this._http.get(`https://viacep.com.br/ws/${cep}/json/`)
      }
    }

    return of({})
  }
}
