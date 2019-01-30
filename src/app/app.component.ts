import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { User } from './user.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    errorMessage;
    sucesso;
    mostrarCard: boolean = false;
    user: User;
    users: User[];
    FjODdlMmMw;
    token;
    email: String;
    url;
    alertMessageSenha;
    isLoading = false;
    isLoadingLogin = false;
    isLoadingCadastro = false;
    isLoadingPassword = false;

    customEmail = {
        name: '',
        assunto: '',
        email: '',
        message: ''
    };
    @ViewChild('formLogin') formLogin: NgForm;
    loading: boolean;
    error: string;
    lala;
    celcius;
    fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
    uniqueArray;
    array;
    lala2;

    rockets = [
        { country: 'Russia', launches: 32 },
        { country: 'US', launches: 23 },
        { country: 'China', launches: 16 },
        { country: 'Europe(ESA)', launches: 7 },
        { country: 'India', launches: 4 },
        { country: 'Japan', launches: 30 }
    ];
    sum;
    constructor(private _userService: UserService, private router: Router) { }
    // https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/
    ngOnInit() {
        this.user = new User();
        // test operador map 
        this.celcius = this.fahrenheit.map(function (elem) {
            return Math.round((elem - 32) * 5 / 9);
        });
        console.log('celcius', this.celcius);

        //    filter()
        this.uniqueArray = this.fahrenheit.filter(function (elem, index, array) {
            return array.indexOf(elem) === index;
        });
        console.log('uniqueArray: ', this.uniqueArray);
        // ES6
        // array.filter( ( elem, index, arr ) => arr.indexOf( elem ) === index );

        // reduce retorna a soma dos lançamentos
        this.sum = this.rockets.reduce(function (prevVal, elem) {
            console.log(elem);
            return prevVal + elem.launches;
        }, 0);
                    // this.lala2 = JSON.stringify(this.sun);

        console.log('reduce: ', this.sum);
        // ES6
        // rockets.reduce( ( prevVal, elem ) => prevVal + elem.launches, 0 ); 


    }



    register() {
        // this.isLoadingCadastro=true;

        this._userService.register(this.user)
            .subscribe((res) => {
                // console.log(res);
                //   this.isLoadingCadastro=false;
                //   this.httpUtilService.setToken(res.FjODdlMmMw)
                // sets user in the service
                //   this._userService.setUser(res.user);
                // navigate and clear input fields
                //   this.router.navigate(['/videoApresenta']);
            }, (error: any) => {
                // fiz isso para tirar as aspas
                this.lala = JSON.stringify(error.error);
                this.errorMessage = JSON.parse(this.lala);
                //   this.isLoadingCadastro=false;
                //   toast(err, 2500);
                console.log(`${error.val}: Retried 2 times then quit!`)
            });
    }

}
