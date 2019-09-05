import { FavoriteService } from './../services/favorite.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private favService: FavoriteService) { }
  favlist: any[];
  ngOnInit() {
    this.favService.getfavInfo().subscribe(favorite => {this.favlist = favorite;
    })
  }
  removeFromFav(repo)
  {
    this.favService.removefromfav(repo).subscribe();
    window.location.reload();


  }

}
