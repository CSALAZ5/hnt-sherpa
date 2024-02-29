import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  title = 'hnt-sherpa';

  ngOnInit(): void {
    console.log("Entra a App Component");
  }

  usersList: Array<any> = [];
  currentUser = {};

  public userList(a: any) {
    console.log("Entra userList en App Component");
    this.usersList = a;
  }
}
