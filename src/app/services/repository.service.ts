import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private repositoryname: string;
  private repo_count: number;
  private clientid = "Iv1.3e725c2d71cb727d";
  private clientsecret = "c48894f1598cf640e09c1413b60ea2a5ebbb14d5";
  constructor(private http:Http) { 
    console.log("service is running");
    //this.repositoryname='htmlassignment';
    this.repo_count=21;
  }

  getRepoInfo(search)
  {
    return this.http.get("https://api.github.com/search/repositories?q=" + search + "&client_id=" + this.clientid + "&client_secret=" + this.clientsecret+"&per_page="+this.repo_count)
    .pipe(map(res => res.json()));
  }
  addtofav(repo):Observable<any>
  {
    // console.log(repo);
    alert("added successfully");
    return this.http.post('http://localhost:3000/posts',repo);
  }
}
