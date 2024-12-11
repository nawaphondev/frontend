import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, ButtonComponent],
})
export class ForgotPasswordComponent implements OnInit {
  email: string = ''; // ตัวแปรสำหรับเก็บค่าอีเมล

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.email) {
      Swal.fire({
        icon: 'error',
        title: 'อีเมลไม่ถูกต้อง',
        text: 'กรุณากรอกอีเมลของคุณ!',
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }

    // หากส่งคำขอสำเร็จ
    Swal.fire({
      icon: 'success',
      title: 'ส่งคำขอสำเร็จ',
      text: 'กรุณาตรวจสอบอีเมลของคุณเพื่อรีเซ็ตรหัสผ่าน',
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      // ทำการนำทางหรือรีเฟรช
      console.log('คำขอรีเซ็ตรหัสผ่านส่งสำเร็จ');
    });
  }
}

