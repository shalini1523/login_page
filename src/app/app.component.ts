import { Component } from '@angular/core';
// // @ts-ignore
// import { webSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
}
  // constructor(private webSocketService: webSocketService) {}
  // ngOnInit() {
  //   this.webSocketService.listen('test event').subscribe((data) => {
  //     console.log(data);
  //   })
  // }
