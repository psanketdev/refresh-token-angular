import { Component } from '@angular/core';
import { User } from '../../interface/user';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: User = {
    emailId: '',
    password: ''
  };

  constructor(private userSer: UserService, private router: Router) {}


  submitForm() {
    this.userSer.onLogin(this.loginObj).subscribe((res) => {
      if(res.result && typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('user', JSON.stringify(res.data));
        localStorage.setItem('userEmail', res.data.emailId);
        localStorage.setItem('userId', JSON.stringify(res.data.userId));
        this.router.navigateByUrl('/home');
      } else {
        alert('Invalid Email or Password');
      }
    }, error => {
      console.log('Wrong Credentials')
    })
  }

}
