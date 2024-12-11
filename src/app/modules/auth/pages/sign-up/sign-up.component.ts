import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http'; // เพิ่ม HttpClient
import { environment } from 'src/environments/environment'; // เพิ่ม environment

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf, ButtonComponent],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType = false;
  confirmPasswordTextType = false; // ตัวแปรใหม่สำหรับ confirm-password
  imageUrl: string = ''; // URL to display the selected image
  selectedFile: File | null = null; // ตัวแปรสำหรับเก็บไฟล์ที่เลือก

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
    private readonly _http: HttpClient, // เพิ่ม HttpClient
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      profile_picture: [''],
      userLevel: ['User'], // ตั้งค่า Default เป็น User
      status: ['Active'], // ตั้งค่า Default เป็น Active
    });
  }

  isLoading = false; // เพิ่มตัวแปรนี้เพื่อจัดการสถานะการโหลด

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  toggleConfirmPasswordTextType() {
    this.confirmPasswordTextType = !this.confirmPasswordTextType;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;
  
    if (!file.type.startsWith('image/')) {
      Swal.fire({
        icon: 'error',
        title: 'ไฟล์ไม่รองรับ',
        text: 'กรุณาอัปโหลดไฟล์รูปภาพเท่านั้น!',
      });
      return;
    }
  
    if (file.size > 2 * 1024 * 1024) {
      Swal.fire({
        icon: 'error',
        title: 'ไฟล์ใหญ่เกินไป',
        text: 'กรุณาอัปโหลดไฟล์ขนาดไม่เกิน 2 MB!',
      });
      return;
    }
  
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
      this.form.patchValue({ user_img: file });
      Swal.fire({
        icon: 'info',
        title: 'ไฟล์ถูกเลือกแล้ว',
        text: `คุณเลือกไฟล์ ${file.name}`,
        timer: 1500,
        showConfirmButton: false,
      });
    };
    reader.readAsDataURL(file);
    this.selectedFile = file;
  }
  

  onSubmit() {
    if (this.isLoading) return;

    this.submitted = true;

    if (this.form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อมูลไม่ครบถ้วน',
        text: 'กรุณากรอกข้อมูลให้ครบทุกช่อง!',
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }

    this.isLoading = true;

    const formData = new FormData();
    Object.keys(this.form.controls).forEach((key) => {
      formData.append(key, this.form.get(key)?.value);
    });
    if (this.selectedFile) {
      formData.append('profile_picture', this.selectedFile); // ชื่อฟิลด์ตรงกับ Backend
    }

    this._http.post(`${environment.apiUrl}/register`, formData).subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        this.isLoading = false;
        Swal.fire({
          icon: 'success',
          title: 'ลงทะเบียนสำเร็จ!',
          text: 'กำลังนำคุณเข้าสู่หน้าเข้าสู่ระบบ...',
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          this._router.navigate(['/auth/sign-in']);
        });
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error:', err);
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: err.error?.message || 'ไม่สามารถลงทะเบียนได้!',
          timer: 1500,
          showConfirmButton: false,
        });
      },
    });
  }
}
