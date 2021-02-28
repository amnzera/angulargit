/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiGitService } from './apiGit.service';

describe('Service: ApiGit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiGitService]
    });
  });

  it('should ...', inject([ApiGitService], (service: ApiGitService) => {
    expect(service).toBeTruthy();
  }));
});
