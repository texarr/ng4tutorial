import { Injectable } from '@angular/core';
import { Post } from '../app.component';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class HttpService {

  private postsObs = new BehaviorSubject<Array<Post>>([]);
  posts$ = this.postsObs.asObservable();

  constructor(private http: HttpClient) {
    this.getPosts();
  }

  //pobieranie wszystkich postów
  getPosts() {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts').subscribe(
      posts=>{
        this.postsObs.next(posts);
      },
      err=>{
        console.log(err);
      }
    );
  }

  //pobieranie jednego posta podając id
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
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
