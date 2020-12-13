import { TestBed } from '@angular/core/testing';

import { ResolveMovieService } from './resolve-movie.service';

describe('ResolveMovieService', () => {
  let service: ResolveMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
