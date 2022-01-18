import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryServiceService} from "../service/dictionary-service.service";
@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word:any;
  constructor(private activatedRoute: ActivatedRoute,private dictionaryService : DictionaryServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word1 = paramMap.get('word');
      this.word = this.dictionaryService.translate(word1);
    });
  }

}
