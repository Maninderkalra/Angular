import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormtemplateComponent } from './formtemplate/formtemplate.component';
import { FormreactiveComponent } from './formreactive/formreactive.component';
import { AppRouteModule } from './app-route/app-route.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormtemplateComponent,
    FormreactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
