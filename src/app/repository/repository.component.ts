import { RepositoryService } from './../services/repository.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repo: any[];
  search="";
  constructor(private repositoryService: RepositoryService) {
    
  }

  ngOnInit() {
  }
  findRepos()
  {
    // this.repositoryService.updateRepo(this.search);
    this.repositoryService.getRepoInfo(this.search).subscribe(repository => {
      console.log(repository);
      this.repo = repository;
    })
  }
  addToFav(repo)
  {
    this.repositoryService.addtofav(repo).subscribe();
  }


}
