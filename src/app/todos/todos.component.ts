import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {yearsPerPage} from "@angular/material/datepicker";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('fade',[
      state('void',style({opacity:0})),

      transition('void =>*, * =>void', [
        animate(2000)
    ])
  ])
    ]
})
export class TodosComponent implements OnInit {
  items: any[] = [
    'wash the dishes',
    'call the accountant',
    'apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';

  }

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  removeItem(item: any) {
  }
}
