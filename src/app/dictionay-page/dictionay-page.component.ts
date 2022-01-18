import { Component, OnInit } from '@angular/core';
import {IWord} from "../model/iword";
import {DictionaryServiceService} from "../service/dictionary-service.service";

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {
  wordsList : IWord[]=[];
  constructor(private dictionaryService : DictionaryServiceService) { }

  ngOnInit(): void {
    this.getAll()
  }
 getAll():void {
   this.wordsList = this.dictionaryService.words
 }
}
