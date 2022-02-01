import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public myForm!: FormGroup;

  public user: User={
    username:'',
    password:'',
  }

  constructor(private formBuilder: FormBuilder,private registerService: RegisterService, private router:Router) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  doRegister() : void{
    
    
    console.log(this.myForm);
    this.user.email=this.myForm.get('email')?.value;
    this.user.username=this.myForm.get('username')?.value;
    this.user.firstName=this.myForm.get('firstName')?.value;
    this.user.lastName=this.myForm.get('lastName')?.value;
    this.user.password=this.myForm.get('password')?.value;
    this.registerService.register(this.user).subscribe((response:any)=>{
      console.log(response);
      this.router.navigate(['/login']);
    })
    if (this.myForm.valid) {
      
    }
  }
}
