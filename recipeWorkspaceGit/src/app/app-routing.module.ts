import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesResolverService } from './recipes/recipe-resolver.service';
import { ShopingListComponent } from './shoping-list/shoping-list.component';

// const appRoutes: Routes = [
//   { path: "", redirectTo: "/recipes", pathMatch: "full" },
//   {
//     path: "recipes",
//     loadChildren: () =>
//       import("./recipes/recipes.module").then(m => m.RecipesModule)
//   },
//   {
//     path: "shopping-list",
//     loadChildren: () =>
//       import("./shoping-list/shopping-list.module").then(
//         m => m.ShoppingListModule
//       )
//   },
//   {
//     path: "auth",
//     loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
//   }
// ];


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService]
      }
    ]
  },
  { path: 'shopping-list', component: ShopingListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
