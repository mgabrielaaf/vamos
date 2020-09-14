import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.css']
})
export class ProjComponent implements OnInit {
  titulo: string = 'projeto';
  constructor() { }

  imgUrl: string = '/assets/eu.jpg';

  ngOnInit(): void {
  }

}
