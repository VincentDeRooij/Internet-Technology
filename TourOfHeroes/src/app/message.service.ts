import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(message: string){
    this.messages.push(message); // add an item to the list
  }

  clear(){
    this.messages = []; // reset the list by building a new list
  }
}
