import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute,private dataService: DataService) { }
  movieData;
  directorData;
  showDirectors = false;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      console.log(res)
      this.movieData = res.data
    })
  }

  fetchDirectorMovie(id){
    console.log(id)
    this.dataService.getDirectorMovies(id).subscribe(res => {
      console.log(res);
      this.directorData = res;
      this.showDirectors = true;
    })
  }

  close(){
    this.showDirectors = false;
  }

}
