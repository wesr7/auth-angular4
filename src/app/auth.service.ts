import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { AuthConfig } from './auth.config';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

    lock = new Auth0Lock(your_clientId, your_domain, {auth: {redirect: false}});

    constructor(private router: Router) {

      this.lock.on('authenticated', (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          console.log(error);
        }

        localStorage.setItem('profile', JSON.stringify(profile));
      });

      this.lock.hide();
    });
  }

  // This method will display the lock widget
  login() {
    this.lock.show();
  }

  // This method will log the use out
  logout() {
    // To log out, just remove the token and profile
    // from local storage
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');

    // Send the user back to the public deals page after logout
    this.router.navigateByUrl('/deals');
  }

  // Finally, this method will check to see if the user is logged in. We'll be able to tell by checking to see if they have a token and whether that token is valid or not.
  loggedIn() {
    return tokenNotExpired('id_token');
  }

}