import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs/index";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

 private recipes: Recipe[] = [
    new Recipe('A test name',
                'This is a test',
      'https://img.taste.com.au/4-rDZU7z/w643-h428-cfill-q90/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg',
      [
        new Ingredient('Meat', '3'),
        new Ingredient('Milk', '1')
      ]),
    new Recipe('Spaghetti Food', 'This Delicious spaghetti',
      'https://www.365daysofcrockpot.com/wp-content/uploads/2018/04/instant-pot-spaghetti-sauce.jpg',
      [
        new Ingredient('Spaghetti', '70'),
        new Ingredient('Tomato', '2')
      ])
  ];

 constructor(private slService: ShoppingListService) {}

 setRecipes(recipes: Recipe[]){
   this.recipes = recipes;
   this.recipesChanged.next(this.recipes.slice());
 }

 getRecipes() {
   return this.recipes.slice();
 }

 getOneRecipe(index: number){
   return this.recipes[index];
 }

 addIngredientsToShoppingList(ingredients: Ingredient[]) {
   this.slService.addIngredients(ingredients);
 }

 addRecipe(recipe: Recipe){
   this.recipes.push(recipe);
   this.recipesChanged.next(this.recipes);
 }

 updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
   this.recipesChanged.next(this.recipes);
 }

 deleteRecipe(index: number){
   this.recipes.splice(index, 1);
   this.recipesChanged.next(this.recipes.slice());
 }
}
