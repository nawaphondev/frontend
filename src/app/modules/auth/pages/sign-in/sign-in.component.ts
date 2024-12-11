import { NgClass, NgIf } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    AngularSvgIconModule,
    NgClass,
    NgIf,
    ButtonComponent,
  ],
  providers: [SvgIconRegistryService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType = false;
  apiUrl: string = environment.apiUrl;
  isLoading = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
    private readonly _http: HttpClient,
    private svgIconService: SvgIconRegistryService
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', Validators.required],
    });

    // Load SVG icons
    this.svgIconService.loadSvg('assets/icons/heroicons/outline/eye.svg', 'eye');
    this.svgIconService.loadSvg('assets/icons/heroicons/outline/eye-off.svg', 'eye-off');
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  navigateToSignUp() {
    sessionStorage.removeItem('sign-up-page-loaded');
    this._router.navigate(['/auth/sign-up']);
  }

  private showNotification(icon: 'success' | 'error', title: string, text: string) {
    Swal.fire({
      icon,
      title,
      text,
      timer: 1500,
      showConfirmButton: false,
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      this.showNotification('error', 'ข้อมูลไม่ถูกต้อง', 'กรุณากรอกข้อมูลให้ครบถ้วน!');
      return;
    }

    this.isLoading = true;

    const loginUrl = `${this.apiUrl}/login`;

    this._http.post(loginUrl, this.form.value).subscribe({
      next: () => {
        this.showNotification('success', 'ล็อกอินสำเร็จ!', 'กำลังนำคุณเข้าสู่ระบบ...');
        this._router.navigate(['/layout/dashboard/nfts']);
      },
      error: (error) => {
        console.error('Error:', error);
        this.showNotification('error', 'เกิดข้อผิดพลาด!', error.error?.message || 'ชื่อผู้ใช้หรือรหัสผ่านผิด');
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
