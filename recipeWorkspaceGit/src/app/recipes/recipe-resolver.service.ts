import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

  export class RecipesResolverService implements Resolve<Recipe[]> {
    constructor(
      private dataStorageService: DataStorageService,
      private recipesService: RecipeService
    ) {}
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const recipes = this.recipesService.getRecipes();
  
      if (recipes.length === 0) {
        return this.dataStorageService.fetchRecipes();
      } else {
        return recipes;
      }
    }
}
