import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private repositoryname: string;
  private repo_count: number;
  // private clientid = "Iv1.3e725c2d71cb727d";
  // private clientsecret = "c48894f1598cf640e09c1413b60ea2a5ebbb14d5";
  constructor(private http:Http) { 
    console.log("service is running");
    //this.repositoryname='htmlassignment';
    this.repo_count=21;
  }

  getfavInfo()
  {
    return this.http.get("http://localhost:3000/posts")
    .pipe(map(res => res.json()));
  }
  removefromfav(repo)
  {
    return this.http.delete(`${"http://localhost:3000/posts"}/${repo}`)
    .pipe(map(res => res.json()));
  }
}
