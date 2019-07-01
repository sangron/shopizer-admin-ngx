import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  user: User;
  path = 'User';
  pwdPattern = '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,12}$';
  errorMessage = '';

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.userService.getUser(this.userService.getUserId())
      .subscribe(user => {
        this.user = user;
      });
  }

  private createForm() {
    this.form = this.fb.group({
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.pattern(this.pwdPattern)]],
      confirmNewPassword: ['', [Validators.required]],
    }, { validator: this.checkPasswords });
  }

  get password(): any {
    return this.form.get('password');
  }

  get newPassword(): any {
    return this.form.get('newPassword');
  }

  get confirmNewPassword(): any {
    return this.form.get('confirmNewPassword');
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.newPassword.value;
    const confirmPass = group.controls.confirmNewPassword.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit() {
    const passwords = {
      changePassword: this.form.value.newPassword,
      password: this.form.value.password
    };
    this.userService.updatePassword(this.userService.getUserId(), passwords)
      .subscribe(res => {
        console.log(res);
        this.toastr.success('Password successfully changed.', 'Success');
        this.router.navigate(['pages/user-management/profile']);
      }, err => {
        this.errorMessage = 'Actual password does not match for user';
      });
  }

}
