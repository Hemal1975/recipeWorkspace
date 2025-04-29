import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShopingListComponent } from "./shoping-list.component";

@NgModule({
    declarations: [ShopingListComponent, ShoppingEditComponent],
    imports: [
      FormsModule,
      RouterModule.forChild([{ path: '', component: ShopingListComponent }]),
      SharedModule
    ],
    // providers: [LoggingService]
  })
  export class ShoppingListModule {}
  