import { Component, OnInit } from '@angular/core';
import { ClimaService } from './services/clima.service';
import { UsersService } from "../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  constructor(public userService: UsersService) {}
  ng() {
    this.getUserLogged();
  }
  getUserLogged() {
    this.userService.getUser().subscribe(user => {
      console.log(user);
    });
  }

  Clima: Array[] = [];

  constructor(private climaService: ClimaService) { }

  ngOnInit() {
    this.getClima();
  }

  getClima(): void {
    this.climaService.getClima()
      .subscribe(clima => this.clima = clima.slice(1, 5));
  }
}
