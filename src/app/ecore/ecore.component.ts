import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ecore',
  templateUrl: './ecore.component.html',
  styleUrls: ['./ecore.component.css']
})
export class EcoreComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  open() {

  }
}
