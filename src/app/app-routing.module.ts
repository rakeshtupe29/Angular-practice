import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { ProductDetailsComponentComponent } from './product-details-component/product-details-component.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {path: '', component: EmployeeComponent},
  {path: 'home', component: DataBindingComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'directive', component: DirectiveDemoComponent,
    children: [{path: 'details/:pid', component: ProductDetailsComponentComponent}]},
  {path: 'employeesHome', component: EmployeeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
