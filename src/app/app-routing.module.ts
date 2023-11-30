import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllordesComponent } from './allordes/allordes.component';
import { AuthGuard } from './auth.guard';
import { BrandproductComponent } from './brandproduct/brandproduct.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryproductsComponent } from './categoryproducts/categoryproducts.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EmailComponent } from './forgetpassword/email/email.component';
import { ResetComponent } from './forgetpassword/reset/reset.component';
import { VerfiyComponent } from './forgetpassword/verfiy/verfiy.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard], component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'categoris', component:CategoriesComponent},
  {path:'products', component:ProductsComponent},
  {path:'cart',canActivate:[AuthGuard], component:CartComponent},
  {path:'brands', component:BrandsComponent},
  {path:'checkout/:id',canActivate:[AuthGuard], component:CheckoutComponent},
  {path:'productdetails/:id', component:ProductdetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'brandproduct/:id',component:BrandproductComponent},
  {path:'categoryproduct/:id',component:CategoryproductsComponent},
  {path:'allorders',canActivate:[AuthGuard],component:AllordesComponent},
  {path:'sendemail',component:EmailComponent},
  {path:'reset',component:ResetComponent},
  {path:'verfy',component:VerfiyComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
