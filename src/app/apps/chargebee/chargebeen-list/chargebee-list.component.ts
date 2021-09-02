import { ViewChild, Component, OnInit } from "@angular/core";
import { Charge } from "../chargebee";
import { ChargeService } from "../charge.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { map } from "rxjs/operators";

@Component({
  selector: "charge-app",
  templateUrl: "./chargebee-list.component.html",
  styleUrls: ["./chargebee-list.component.scss"],
})
export class ChargeBeeListComponent implements OnInit {
  displayedColumns: string[] = [
    "content.plan.name",
    "event_type",
    "content.plan.id",
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
              charges.event_type == "plan_created"
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
              charges.event_type == "plan_created"
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
