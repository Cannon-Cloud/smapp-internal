import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../auth.service";
import { LocalstorageService } from "../localstorage.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loginFormGroup!: FormGroup;
  isSubmitted = false;
  authError = false;
  authMessage = "Email of Password is wrong";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private localstorageService: LocalstorageService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginFormGroup.invalid) return;
    const loginData = {
      email: this.loginForm.email.value,
      password: this.loginForm.password.value,
    };
    this.auth.login(loginData.email, loginData.password).subscribe(
      (user) => {
        this.authError = false;
        this.localstorageService.setToken(user.token);
        this.router.navigate(["/apps/courses"]);
      },
      (error: HttpErrorResponse) => {
        this.authError = true;
        if (error.status !== 400) {
          this.authMessage = "Error is the Service, please try again later!";
        }
      }
    );
  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }
}
