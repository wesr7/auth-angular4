import { NgModule }              from '@angular/core';
import { RouterModule, Routes , CanActivate } from '@angular/router';

import { AuthGuard } from './auth-guard.service'

import { PublicDealsComponent } from './public-deals.component';
import { PrivateDealsComponent } from './private-deals.component';

const appRoutes: Routes = [
    {
    path: '',
    redirectTo: '/deals',
    pathMatch: 'full'
    },
    {
        path: 'deals',
        component: PublicDealsComponent
    },
    {
        path: 'special',
        component: PrivateDealsComponent,
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule

    ]
})

export class AppRouting {}
