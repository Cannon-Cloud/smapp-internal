import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "../categories.service";
import { Category } from "../category";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "zummy-categories-list",
  templateUrl: "./categories-list.component.html",
  styleUrls: ["./categories-list.component.scss"],
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];
  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._getCategories();
  }

  displayedColumns: string[] = ["name", "icon", "color", " "];

  deleteCategory(categoryId: string) {}

  updateCategory(categoryId: string) {
    this.router.navigateByUrl(`apps/categories/form/${categoryId}`);
  }

  private _getCategories() {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
