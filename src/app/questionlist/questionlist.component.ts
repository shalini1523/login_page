import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {
  title='';
  question = '';
  likesCount = 0;
  questionList = [
    {
      question: 'What is your client retention rate?',
      like: 0,
      dislike: 0
    },
    {
      question: 'Which type of your business are not profitable?',
      like: 0,
      dislike: 0
    },
    {
      question: 'What is your social media strategy?',
      like: 0,
      dislike: 0
    }
  ]
  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addNewQuestion() {
    if(this.question) {
      let newObj = {
        question: this.question,
        like: 0,
        dislike: 0
      }
      this.questionList.push(newObj);
    }
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
  openPopup() {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = true;
    // dialogConfig.disableClose = true;
    // dialogConfig.width = "50%";
    // this.dialog.open(NewQuestiComponent, dialogConfig).afterClosed().subscribe(res => {
    // });
   // dialogConfig.data = {orderItemIndex,OrderID};
   //  ?
  }
}
