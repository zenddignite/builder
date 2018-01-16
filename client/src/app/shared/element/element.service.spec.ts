/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ElementService } from './element.service';

describe('ElementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementService]
    });
  });

  it('should ...', inject([ElementService], (service: ElementService) => {
    expect(service).toBeTruthy();
  }));
});
