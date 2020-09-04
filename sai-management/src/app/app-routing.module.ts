import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
const routes: Routes = [
  { path: '4', component: SignupComponent },
  { path: '3', component: SigninComponent },
  { path: '5', component: ForgetpComponent },
  { path: '', component: HomeComponent },
  { path: '6', component: InventoryComponent },
  { path: '7', component: StockOpretionComponent },
  { path: '8', component: AddItmesComponent },
  { path: '9', component: RemoveItemsComponent },
  { path: '10', component: IncreaseItemsQtyComponent },
  { path: '11', component: AdminComponent },
  { path: '12', component: DecreaseitemsComponent },
  { path: '2', component: BuyerComponent },
  { path: '**', component: ErrorPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
