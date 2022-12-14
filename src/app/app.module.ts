import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { DirectivesComponent } from './directives/directives.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { NumbersComponent } from './numbers/numbers.component';
import { OddComponent } from './numbers/odd/odd.component';
import { EvenComponent } from './numbers/even/even.component';
import { ControllerComponent } from './numbers/controller/controller.component';

@NgModule({
  declarations: [AppComponent, WarningComponent, SuccessComponent, DirectivesComponent, HeaderComponent, RecipesComponent, RecipesListComponent, RecipeItemComponent, RecipesDetailComponent, ShoppingComponent, ShoppingListComponent, ShoppingListEditComponent, TodoComponent, TodoItemComponent, TodoFormComponent, NumbersComponent, OddComponent, EvenComponent, ControllerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
