import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { ForgetpComponent } from './forgetp/forgetp.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StockOpretionComponent } from './stock-opretion/stock-opretion.component';
import { AddItmesComponent } from './add-itmes/add-itmes.component';
import { RemoveItemsComponent } from './remove-items/remove-items.component';
import { IncreaseItemsQtyComponent } from './increase-items-qty/increase-items-qty.component';
import { AdminComponent } from './admin/admin.component';
import { DecreaseitemsComponent } from './decreaseitems/decreaseitems.component';
import { BuyerComponent } from './buyer/buyer.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { NgModule } from '@angular/core';

const googleLoginOptions: any = {
  scope: 'profile email',
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ForgetpComponent,
    HomeComponent,
    InventoryComponent,
    StockOpretionComponent,
    AddItmesComponent,
    RemoveItemsComponent,
    IncreaseItemsQtyComponent,
    AdminComponent,
    DecreaseitemsComponent,
    BuyerComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '104476919506-4mtr6olta48hqkit61h2h02js5ojejln.apps.googleusercontent.com',
              googleLoginOptions
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }