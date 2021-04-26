import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  studentList = [
    {
      name:"Hung",
      age:24
    },
    {
      name:"Trang",
      age:20
    },
    {
      name:"Hau",
      age:23
    },
    {
      name:"Uyen",
      age:20
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
