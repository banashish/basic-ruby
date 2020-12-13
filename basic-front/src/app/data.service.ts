import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private subjectForData = new Subject();

  private subjectForUpdate = new Subject();

  getMovies() {
    return this.http.get('/api/movies');
  }

  saveMovie(payload){
    return this.http.post('/api/movies', payload);
  }

  getParticularMovie(id){
    return this.http.get(`/api/movies/${id}`);
  }

  getDirectorMovies(id){
    return this.http.get(`/api/director/${id}/movies`);
  }

  updateMovie(id,payload){
    return this.http.put(`/api/movies/${id}`, payload);
  }

  deleteMovie(id){
    return this.http.delete(`/api/movies/${id}`).subscribe(() => {
      console.log("deleted");
    });
  }

  getMovieSubmitted(){
    return this.subjectForData.asObservable();
  }

  setMovieSubmitted(payload){
    this.subjectForData.next(payload);
  }

  getDataForUpdate(){
    return this.subjectForUpdate.asObservable();
  }

  setDataForUpdate(payload){
    this.subjectForUpdate.next(payload);
  }


}
