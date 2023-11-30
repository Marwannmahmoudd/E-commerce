import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component'
import { Router } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { Categoryss2Component } from './categoryss2/categoryss2.component';
import { SearchPipe } from './search.pipe';
import { BrandproductComponent } from './brandproduct/brandproduct.component';
import { BrandPipe } from './brand.pipe';
import { CategoryproductsComponent } from './categoryproducts/categoryproducts.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderInterceptor } from './loader/loader.interceptor';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from "ngx-toastr";
import { AllordesComponent } from './allordes/allordes.component';
import { EmailComponent } from './forgetpassword/email/email.component';
import { VerfiyComponent } from './forgetpassword/verfiy/verfiy.component';
import { ResetComponent } from './forgetpassword/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CategoriesComponent,
    CartComponent,
    BrandsComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotfoundComponent,
    FooterComponent,
    ProductsComponent,
    ProductdetailsComponent,
    MainsliderComponent,
    Categoryss2Component,
    SearchPipe,
    BrandproductComponent,
    BrandPipe,
    CategoryproductsComponent,
    CheckoutComponent,
    AllordesComponent,
    EmailComponent,
    VerfiyComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatProgressBarModule,
    FormsModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true,
      preventDuplicates:true
    })
  ],
  providers: [
      {
        provide:HTTP_INTERCEPTORS,
        useClass:LoaderInterceptor,
        multi:true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
