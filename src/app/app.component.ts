import { Component, OnInit } from '@angular/core';
import { ClickService } from "./services/click.service";
import { HttpService } from "./services/http.service";
import {HttpErrorResponse} from "@angular/common/http";
import 'rxjs/add/operator/retry';

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
    this.httpService.getPosts().retry(3).subscribe(posts => {
      console.log(posts);
    },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
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

  addPost() {
    const p: Post =({
      userId: 1,
      id: null,
      title: 'Mój post',
      body: 'Pierwszy post o angularze!',
    });

    this.httpService.addPost(p).subscribe(post => {
      console.log(post);
    });
  }

  updatePost() {
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'sunt aut facare lorem dupum klarum',
      body: 'nowy wpis'
    });

    this.httpService.updatePost(p).subscribe(post => {
      console.log(post);
    });
  }

  deletePost() {
    this.httpService.deletePost(1).subscribe(post => {
      console.log(post);
    });
  }

  changePost() {
    const p: Post = ({
      id: 1,
      body: 'zmieniam tylko wpis',
    });

    this.httpService.changePost(p).subscribe(post => {
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
