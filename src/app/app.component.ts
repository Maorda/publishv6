import {Component, OnInit} from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-root',
  template: `
    <h1>
    Sign in
  </h1>

  <button (click)="socialSignIn('facebook')">Sign in with Facebook</button>
  <button (click)="socialSignIn('google')">Signin in with Google</button>  `,
  /*styleUrls: ['./signin.component.css']*/
})


export class AppComponent implements OnInit {

  constructor( private socialAuthService: AuthService ) {}

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData

      }
    );
  }

  ngOnInit(){

  }
}
