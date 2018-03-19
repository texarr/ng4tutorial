import { Injectable } from '@angular/core';
import { Post } from '../app.component';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  //pobieranie wszystkich postów
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }

  //pobieranie jednego posta podając id
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}
