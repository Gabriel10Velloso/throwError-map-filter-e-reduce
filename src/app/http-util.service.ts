import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HttpUtilService {
  private jwtToken: string;
  $tokenValid: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { 
    const initialTokenVal = this.getToken();
    this.$tokenValid.next(initialTokenVal ? true : false );
  }

  setToken(token) {
    this.jwtToken = token;
    if (token) {
      localStorage.setItem('FjODdlMmMw', token);
      const time_to_login = Date.now() + 604800000; //UMA SEMANA = 7 dias 60*60*24*7*1000 --- essa é a conta
      // 60.000 são 1 minutos
      //600.000 são 10 minutos
      //3.6000.000 são 60 minutos 1 hora 

       const today = new Date();
       const one_week = new Date();
      one_week.setDate(today.getDate() + 0);
      localStorage.setItem('y', JSON.stringify(time_to_login));
    } else {
      this.jwtToken = '';
    }
  }

  getToken() {
    this.jwtToken = this.jwtToken ? this.jwtToken : localStorage.getItem('FjODdlMmMw');
    return this.jwtToken;
  }

  headers() {
    const headersParams = { 'Content-Type': 'application/json' };
    headersParams['Authorization'] = 'Bearer ' + this.getToken();
    const headers = new Headers(headersParams);
    const options = new RequestOptions({ headers: headers });
    return options;
  }

}
