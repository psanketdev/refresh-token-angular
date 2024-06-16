import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  userData: any[] = [];
  constructor(private userSer: UserService) {}

  ngOnInit(): void {
    this.getUser();
    this.userSer.$refreshTokenReceived.subscribe(() => {
      this.getUser();
    });
  }

  getUser() {
    this.userSer.getUserData().subscribe((res: any) => {
      this.userData = res.data;
    });
  }
}
