import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  red = '#ff0000';
  yellow = '#ffff00';
  blue = '#0000ff';
  color = 'black';
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(color : string) : void{
   this.color = color;
  }
}
