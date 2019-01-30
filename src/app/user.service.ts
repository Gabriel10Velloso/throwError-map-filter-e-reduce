import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { Observable, throwError } from 'rxjs';
import { map, switchMap, throttle, catchError, tap, retry, mergeMap } from 'rxjs/operators';
import { HttpUtilService } from './http-util.service';
import { of } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {

    url2 = 'http://localhost:3000/register';

    user: User

    constructor(private http: HttpClient, private httpUtilService: HttpUtilService) { }


    register(user: User): Observable<User> {
        console.log(user);
        return this.http.post<User>(this.url2, user, httpOptions)
        .pipe(
            // map(res => res['payload']),
            // catchError(err => {
                //     console.log('caught mapping error and rethrowing', err);
                //     return throwError(err);
                // }),
                mergeMap(val => {
                    console.log('Cadastro realizado');
                    if (val > 5) {
                        return throwError('Error!');
                    }
                    return of(val)
                }),
                catchError(error => {
                    // if(error instanceof HttpErrorResponse){
                    return throwError(error.error);
                    // }else{
                    //     console.log('Cadastro realizado');
                    // }

                }),
                //retry 2 times on error
                retry(1)
            );

    }


    // https://stackblitz.com/edit/error-handling-httpclient?file=src%2Fapp%2Fapp.component.ts

    // handleError(error) {
    //     let errorMessage = '';
    //     if (error.error instanceof ErrorEvent) {
    //         // client-side error
    //         errorMessage = `Error: ${error.error.message}`;
    //     } else {
    //         // server-side error
    //         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //     }
    //     window.alert(errorMessage);
    //     return throwError(errorMessage);
    // }



}


