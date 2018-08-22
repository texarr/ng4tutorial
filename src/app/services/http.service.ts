import { Injectable } from '@angular/core';
import { Post } from '../app.component';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class HttpService {

  private postsObs = new BehaviorSubject<Array<Post>>([]);
  posts$ = this.postsObs.asObservable();

  private postObs = new BehaviorSubject<Post>({});
  post$ = this.postObs.asObservable();

  constructor(private http: HttpClient) {
    this.getPosts();
    this.getPost(1);
  }

  //pobieranie wszystkich postów
  getPosts() {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts/').retry(3).subscribe(
      posts=>{
        this.postsObs.next(posts);
      },
      (err: HttpErrorResponse) => {
        console.log(err.status);
      }
    );
  }

  //pobieranie jednego posta podając id
  getPost(id: number) {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id).retry(3).subscribe(post => {
      this.postObs.next(post);
      console.log(post);
    },
      (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  //pobieranie postów usera o podanym user id
  getPostByUser(userId: number): Observable<Array<Post>> {
    const param = new HttpParams().set('userId', userId + '');
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {params: param})
  }

  //metoda POST
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
  }

  //metoda PUT
  updatePost(post: Post): Observable<Post> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }

  //metoda DELETE
  deletePost(id: number) {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  //metoda PATCH
  changePost(post: Post): Observable<Post> {
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }
}
