import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalchatComponent } from './portalchat/portalchat.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'portal', component: PortalchatComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
