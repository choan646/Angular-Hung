import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  title = 'lOp fE62';
  ngay = new Date();
  giaTien = 12050000000;

  constructor() { }

  ngOnInit(): void {
  }


}
