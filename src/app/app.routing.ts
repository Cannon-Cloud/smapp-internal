import { Routes } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";
import { AuthGuard } from "./authentication/auth-guard.service";
import { LoginComponent } from "./authentication/login/login.component";
import { RegisterComponent } from "./authentication/register/register.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        redirectTo: "/login",
        pathMatch: "full",
      },

      {
        path: "apps",
        loadChildren: () =>
          import("./apps/apps.module").then((m) => m.AppsModule),
      },
      {
        path: "login/register",
        component: RegisterComponent,
      },
    ],
  },

  {
    path: "login",
    component: LoginComponent,
  },
];
