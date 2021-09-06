import { ViewChild, Component, OnInit } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { map } from "rxjs/operators";
import { Donotcall } from "../donotcall";
import { DonotcallService } from "../donotcall.service";

@Component({
  selector: "donotcall-app",
  templateUrl: "./donotcall-list.component.html",
  styleUrls: ["./donotcall-list.component.scss"],
})
export class DonotcallComponent implements OnInit {
  displayedColumns: string[] = [
    "firstName",
    "lastName",
    "companyName",
    "email",
    "phone",
    "addedOn",
  ];
  donotcallList: string[] = [];
  donotcalls: string[] = [];

  public dataSource = new MatTableDataSource<Donotcall>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private donotcall: DonotcallService) {}

  ngOnInit() {
    // this._getChrg();
    this.getDonotcalls();
  }

  getDonotcalls() {
    this.donotcall.getDonotcall().subscribe((calls) => {
      this.dataSource.data = calls as Donotcall[];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
