import { Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";

import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";

import { CategoriesListComponent } from "./categories/categories-list/categories-list.component";
import { CategoriesFormComponent } from "./categories/categories-form/categories-form.component";
import { ChargeBeeListComponent } from "./chargebee/chargebeen-list/chargebee-list.component";
import { ChargeBeeCustomerComponent } from "./chargebee/chargebee-customer/chargebee-customer.component";
import { ChargeBeeSubscriptionComponent } from "./chargebee/chargebee-subscription/chargebee-subscription.component";
import { DonotcallComponent } from "./donotcall/donotcall-list/donotcall-list.component";

export const AppsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "courses",
        component: CoursesComponent,
        data: {
          title: "Courses",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "Courses" },
          ],
        },
      },
      {
        path: "categories",
        component: CategoriesListComponent,
        data: {
          title: "Categories",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "Categories" },
          ],
        },
      },
      {
        path: "categories/form",
        component: CategoriesFormComponent,
        data: {
          title: "Categories Form",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "Categories" },
          ],
        },
      },
      {
        path: "categories/form/:id",
        component: CategoriesFormComponent,
        data: {
          title: "Categories Form",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "Categories" },
          ],
        },
      },
      {
        path: "chargebee",
        component: ChargeBeeListComponent,
        data: {
          title: "Plan Created",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "Chargebee" },
          ],
        },
      },
      {
        path: "cbcustomer",
        component: ChargeBeeCustomerComponent,
        data: {
          title: "Customer Created",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "Customer Created" },
          ],
        },
      },
      {
        path: "cbsubscription",
        component: ChargeBeeSubscriptionComponent,
        data: {
          title: "Subscription Created",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "Subscription Created" },
          ],
        },
      },
      {
        path: "donotcall",
        component: DonotcallComponent,
        data: {
          title: "Do Not Call",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "Do Not Call List" },
          ],
        },
      },

      {
        path: "courses/coursesdetail/:id",
        component: CourseDetailComponent,
        data: {
          title: "Courses Detail",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "Courses" },
          ],
        },
      },
    ],
  },
];
