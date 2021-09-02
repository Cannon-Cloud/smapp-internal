import { ViewChild, Component, OnInit } from "@angular/core";
import { Charge } from "../chargebee";
import { ChargeService } from "../charge.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { map } from "rxjs/operators";

@Component({
  selector: "chargesub-app",
  templateUrl: "./chargebee-subscription.component.html",
  styleUrls: ["./chargebee-subscription.component.scss"],
})
export class ChargeBeeSubscriptionComponent implements OnInit {
  displayedColumns: string[] = [
    "content.subscription.plan_id",
    "content.subscription.plan_unit_price",
    "content.subscription.plan_quantity",
    "content.subscription.billing_period_unit",
    "content.customer.first_name",
    "createdAt",
  ];
  chargeList: string[] = [];
  charges: string[] = [];

  public dataSource = new MatTableDataSource<Charge>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private chargeService: ChargeService) {}

  ngOnInit() {
    // this._getChrg();
    this.getEventChgs();
    this._getUpdatedMessages();
  }

  private _getUpdatedMessages() {
    this.chargeService.charges
      .pipe(
        map((data: any) =>
          data.filter(
            (charges: { event_type: string }) =>
              charges.event_type == "subscription_created"
          )
        )
      )
      .subscribe((msg) => {
        this.dataSource.data = msg as Charge[];
      });
  }
  getEventChgs() {
    this.chargeService
      .getChgs()
      .pipe(
        map((data: any) =>
          data.filter(
            (charges: { event_type: string }) =>
              charges.event_type == "subscription_created"
          )
        )
      )
      .subscribe((chgs) => {
        this.dataSource.data = chgs as Charge[];
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
}
