import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataBindingChildComponent } from './data-binding-child/data-binding-child.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { MoveChangeDirective } from './move-change.directive';
import { Trim2lengthPipe } from './trim2length.pipe';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDetailsComponentComponent } from './product-details-component/product-details-component.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DataBindingComponent,
    DataBindingChildComponent,
    DirectiveDemoComponent,
    MoveChangeDirective,
    Trim2lengthPipe,
    AboutUsComponent,
    ContactUsComponent,
    ProductDetailsComponentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
