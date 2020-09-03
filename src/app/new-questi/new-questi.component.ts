import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-questi',
  templateUrl: './new-questi.component.html',
  styleUrls: ['./new-questi.component.css']
})
export class NewQuestiComponent implements OnInit {
  likesCount = 0;
  questionList = [
    {
      question: 'What problem does your business solve?',
      like: 0,
      dislike: 0
    }
    ]

  constructor(public dialogRef: MatDialogRef<NewQuestiComponent>) { }

  ngOnInit(): void {
  }

  likeIncrement(index) {
    this.questionList[index].like++;
  }

  disLikelikeIncrement(index) {
    this.questionList[index].dislike++;
  }

  deleteQuestion(index) {
    this.questionList.splice(index, 1);
  }

}
