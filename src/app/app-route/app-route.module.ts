import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import {FormtemplateComponent} from '../formtemplate/formtemplate.component';
import {FormreactiveComponent} from '../formreactive/formreactive.component';

const appRoutes:Routes=[{path:'', pathMatch:'full',redirectTo:'template'},
{path:'template', component:FormtemplateComponent},
{path:'reactive', component:FormreactiveComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouteModule { }
