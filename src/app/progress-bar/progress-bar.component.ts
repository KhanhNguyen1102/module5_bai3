import {Component, Input, OnInit} from '@angular/core';
import {DemoServiceService} from "../service/demo-service.service";


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;

  constructor(private demoService:DemoServiceService) {
  }

  ngOnInit() {
    this.loading();
  }

  loading() {
    let interval = setInterval(() => {
      this.progress = +this.progress + 5;
      if (this.progress == 100) {
        clearInterval(interval);
      }
    }, 1000);
  }
 saySomething():void{
    this.demoService.sayHello();
 }
}
