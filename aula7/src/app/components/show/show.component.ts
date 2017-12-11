import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  names: string[];

  constructor() { }

  ngOnInit() {
    this.names = [
      "Amy",
      "Boyle",
      "Charles",
      "Diaz",
    ]
  }

}
