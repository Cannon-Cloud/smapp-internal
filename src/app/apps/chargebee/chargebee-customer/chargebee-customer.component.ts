import { ViewChild, Component, OnInit } from "@angular/core";
import { Charge } from "../chargebee";
import { ChargeService } from "../charge.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { map } from "rxjs/operators";

@Component({
  selector: "chargecust-app",
  templateUrl: "./chargebee-customer.component.html",
  styleUrls: ["./chargebee-customer.component.scss"],
})
export class ChargeBeeCustomerComponent implements OnInit {
  displayedColumns: string[] = [
    "content.customer.first_name",
    "event_type",
    "content.customer.email",
    "api_version",
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
              charges.event_type == "customer_created"
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
              charges.event_type == "customer_created"
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
