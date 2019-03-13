import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {RecipeService} from "./recipes/recipe.service";
import {DataStorageService} from "./shared/data-storage.service";
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./auth/auth.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    ShoppingListModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
