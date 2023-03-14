import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
  }

  form: FormGroup = new FormGroup({
    document: new FormControl(''),
    password: new FormControl('')
  });

  submitted = false;

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    let data = {
      "document": this.form.get('document')?.value,
      "pwd": this.form.get('password')?.value
    }

    this.authService.doLogin(data).subscribe((response: any) => {
      if(response["message"] === 'OK'){
        localStorage.setItem("document",btoa(data.document));
        this.form.reset();
        this.router.navigate(['/entradas']);
      }
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        document: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
