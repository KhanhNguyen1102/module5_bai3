import { Injectable } from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  words:IWord[]=[
    {
      word:"dog",
      mean:"chó",
    },
    {
      word:"cat",
      mean:"mèo",
    },
    {
      word:"plane",
      mean:"máy bay"
    },
    {
      word:"house",
      mean:"nhà"
    }
  ];
  constructor() { }
  translate(word:string):string{
//@ts-ignore
    return this.words.find(item => item.word === word).mean
  }
}
