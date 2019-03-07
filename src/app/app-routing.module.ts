import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { ComponentComponent } from './component/component.component';
// import { BodyComponent } from './body/body.component'


const routes: Routes = [
//   {
//   path:'',
//    component:LoginComponent
//  },
//  {
//    path:'centerpage',
//    component:HeaderComponent
//  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [ LoginComponent ]
