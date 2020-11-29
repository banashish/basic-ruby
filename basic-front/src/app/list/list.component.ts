import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private service: DataService) { }
  movieList: any = [];
  ngOnInit(): void {
    this.getMoviesList();
    this.subscription = this.service.getMovieSubmitted().subscribe(res => {
      let index = -1;
      this.movieList.forEach((element, i) => {
        if(element.id === res["id"]){
          index = i;
        }
      });
      if(index === -1){
        this.movieList.push(res);
      }
      else{
        this.movieList[index] = res;
      }
    });
  }

  getMoviesList(){
    this.service.getMovies().subscribe(res => {
      this.movieList = res;
    });
  }

  onUpdate(data){
    this.service.setDataForUpdate(data);
  }

  onDelete(data,index){
    this.movieList.splice(index, 1);
    this.service.deleteMovie(data.id);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
