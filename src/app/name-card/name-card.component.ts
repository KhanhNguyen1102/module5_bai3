import { Component, OnInit, Input } from '@angular/core';
import {DemoServiceService} from "../service/demo-service.service";



@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  @Input() cardName!: string;
  @Input() email!: string;
  @Input() phone!: string;

  constructor(private demoService:DemoServiceService) {
  }

  ngOnInit() {
  }
  hello():void{
    this.demoService.sayHello();
  }
}
