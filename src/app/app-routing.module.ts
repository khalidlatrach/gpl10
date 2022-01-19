import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlAddComponent } from './pl/pl-add/pl-add.component';
import { PlListComponent } from './pl/pl-list/pl-list.component';
import { PlUpdateComponent } from './pl/pl-update/pl-update.component';
import { GuardService } from './services/guard.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component: SigninComponent},
  {path:'signin', component: SigninComponent},
  {path:'pl', canActivate: [GuardService],component: PlListComponent},
   {path:'notFound', component:PageNotFoundComponent},
   {path:'**', redirectTo:'/notFound'}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
