import { TestBed, inject } from '@angular/core/testing';

import { CmdService } from './cmd.service';

describe('CmdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CmdService]
    });
  });

  it('should be created', inject([CmdService], (service: CmdService) => {
    expect(service).toBeTruthy();
  }));
});
