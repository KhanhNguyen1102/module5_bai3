import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor() { }
  sayHello():void{
    console.log("oh yeah");
  }
}
