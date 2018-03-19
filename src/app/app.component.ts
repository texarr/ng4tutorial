import { Component, OnInit } from '@angular/core';
import { ClickService } from "./services/click.service";
import { HttpService } from "./services/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClickService, HttpService]
})
export class AppComponent implements OnInit {

  allClicks: number;

  constructor(private clickService: ClickService, private httpService: HttpService) {

  }

  ngOnInit(): void {
    this.clickService.getSum().subscribe(data => {
      this.allClicks = data;
    });
  }

  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }

  getPost() {
    this.httpService.getPost(1).subscribe(post => {
      console.log(post);
    });
  }

  getPostByUser() {
    this.httpService.getPostByUser(1).subscribe(post => {
      console.log(post);
    });
  }
}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
