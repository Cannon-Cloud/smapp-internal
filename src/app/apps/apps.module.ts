import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DemoMaterialModule } from "../demo-material-module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { QuillModule } from "ngx-quill";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { AppsRoutes } from "./apps.routing";
import { NgxPaginationModule } from "ngx-pagination";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { CoursesComponent } from "./courses/courses.component";
import { CourseService } from "./courses/course.service";

import { NgApexchartsModule } from "ng-apexcharts";

import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { UxModule } from "./ux.module";
import { CategoriesService } from "./categories/categories.service";
import { CategoriesFormComponent } from "./categories/categories-form/categories-form.component";
import { CategoriesListComponent } from "./categories/categories-list/categories-list.component";

import { CoursesFormComponent } from "./courses/courses-form/courses-form.component";
import { ChargeBeeListComponent } from "./chargebee/chargebeen-list/chargebee-list.component";
import { ChargeBeeService } from "./chargebee/chargebee.service";
import { ChargeService } from "./chargebee/charge.service";

import { ChargeBeeCustomerComponent } from "./chargebee/chargebee-customer/chargebee-customer.component";
import { ChargeBeeSubscriptionComponent } from "./chargebee/chargebee-subscription/chargebee-subscription.component";

import { MatDialogModule } from "@angular/material/dialog";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

const config: SocketIoConfig = {
  url: "https://api.oursmapp.com:3000",
  options: { transports: ["polling"] },
};

@NgModule({
  imports: [
    SocketIoModule.forRoot(config),
    CommonModule,
    MatDialogModule,
    RouterModule.forChild(AppsRoutes),
    DemoMaterialModule,
    UxModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FlexLayoutModule,
    QuillModule.forRoot(),
    NgApexchartsModule,
    PerfectScrollbarModule,
    Ng2SearchPipeModule,
    DragDropModule,
    NgxPaginationModule,
  ],
  declarations: [
    ChargeBeeSubscriptionComponent,
    ChargeBeeCustomerComponent,
    ChargeBeeListComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
    CoursesFormComponent,
    CoursesComponent,
    CourseDetailComponent,
  ],
  providers: [
    CourseService,
    DatePipe,
    CategoriesService,
    ChargeBeeService,
    ChargeService,
  ],
  entryComponents: [],
})
export class AppsModule {}
