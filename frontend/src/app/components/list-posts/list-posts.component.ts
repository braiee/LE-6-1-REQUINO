import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from 'src/app/models/post.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-lists-post',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostComponent {
posts?: Post[] = [];
constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

ngOnInit(): void {
  this.initData();
}

initData(): void {
  this.http.get<Post[]>('https://localhost:7066/api/Post')
  .subscribe({
    next: (data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    }
  })
}

logout(): void {
  this.tokenStorage.signOut();
}
}
//https://localhost:7066/api/Post

//'https://localhost:7066/api/Post'