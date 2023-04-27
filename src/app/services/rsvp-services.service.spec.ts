import { TestBed } from '@angular/core/testing';

import { RsvpServicesService } from './rsvp-services.service';

describe('RsvpServicesService', () => {
  let service: RsvpServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RsvpServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
