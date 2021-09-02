import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CategoriesService } from "../categories.service";
import { Category } from "../category";
import { timer } from "rxjs";

@Component({
  selector: "zummy-categories-form",
  templateUrl: "./categories-form.component.html",
  styles: [],
})
export class CategoriesFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  editMode = false;
  currentCategoryId: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private location: Location,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      icon: ["", Validators.required],
      color: ["#fff"],
    });

    this._checkEditMode();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return console.log("error");
    }
    const category: Category = {
      id: this.currentCategoryId,
      name: this.categoryForm.name.value,
      icon: this.categoryForm.icon.value,
      color: this.categoryForm.color.value,
    };
    if (this.editMode) {
      this._updateCategory(category);
    } else {
      this._addCategory(category);
    }
  }

  onCancel() {
    this.location.back();
  }

  private _checkEditMode() {
    this.router.params.subscribe((params) => {
      if (params.id) {
        this.editMode = true;
        this.currentCategoryId = params.id;
        this.categoriesService.getCategory(params.id).subscribe((category) => {
          this.categoryForm.name.setValue(category.name);
          this.categoryForm.icon.setValue(category.icon);
          this.categoryForm.color.setValue(category.color);
        });
      }
    });
  }

  private _addCategory(category: Category) {}

  private _updateCategory(category: Category) {}

  get categoryForm() {
    return this.form.controls;
  }
}
