import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
  OnInit,
} from "@angular/core";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { MediaMatcher } from "@angular/cdk/layout";
import { MenuItems } from "../../../shared/menu-items/menu-items";
import { UsersService } from "src/app/authentication/users.service";
import { AuthService } from "src/app/authentication/auth.service";
import { LocalstorageService } from "src/app/authentication/localstorage.service";

@Component({
  selector: "app-vertical-sidebar",
  templateUrl: "./vertical-sidebar.component.html",
  styleUrls: [],
})
export class VerticalAppSidebarComponent implements OnInit, OnDestroy {
  public config: PerfectScrollbarConfigInterface = {};
  mobileQuery: MediaQueryList;
  userName: string | null;

  @Input() showClass: boolean = false;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _mobileQueryListener: () => void;
  status = true;
  showMenu = "";
  itemSelect: number[] = [];
  parentIndex = 0;
  childIndex = 0;

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = "0";
    } else {
      this.showMenu = element;
    }
  }

  subclickEvent(): void {
    this.status = true;
  }
  scrollToTop(): void {
    document.querySelector(".page-wrapper")?.scroll({
      top: 0,
      left: 0,
    });
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private userService: UsersService,
    private authService: AuthService,
    private localstorageServce: LocalstorageService
  ) {
    this.mobileQuery = media.matchMedia("(min-width: 768px)");
    this.userName = this.localstorageServce.getUserName();
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.getUserName();
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getUserName() {
    const token = this.localstorageServce.getToken();
    if (token) {
      const tokenDecode = JSON.parse(atob(token.split(".")[1]));
      this.userName = tokenDecode.name;
    }
    console.log(this.userName);
  }

  handleNotify() {
    if (window.innerWidth < 1024) {
      this.notify.emit(!this.showClass);
    }
  }

  onLogout() {
    this.authService.logout();
  }
}
