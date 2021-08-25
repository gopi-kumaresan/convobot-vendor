import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoriesMenusComponent } from "./categories-menus.component";
import { MenusComponent } from "./menus/menus.component";

const routes: Routes = [
  {
    path: "",
    component: CategoriesMenusComponent,
    children: [
      {
        path: "",
        component: MenusComponent,
      },

      { path: "", redirectTo: "", pathMatch: "full" },
      { path: "**", redirectTo: "", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesMenusRoutingModule {}
