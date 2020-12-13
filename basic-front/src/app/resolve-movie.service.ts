import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveMovieService implements Resolve<any> {

  constructor(private dataService : DataService) { }
  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params.id
    return this.dataService.getParticularMovie(id)
  }
}
