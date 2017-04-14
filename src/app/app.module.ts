import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { PublicDealsComponent } from './public-deals.component';
import { PrivateDealsComponent } from './private-deals.component';

import { DealService } from './deal.service';
import { AuthService } from './auth.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthGuard } from './auth-guard.service'

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
    PublicDealsComponent,
    PrivateDealsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRouting
  ],
  providers: [DealService, AuthService, AuthGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
