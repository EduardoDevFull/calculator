import { TestBed } from '@angular/core/testing';

import { Calculate } from './calculate';

describe('Calculate', () => {
  let service: Calculate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calculate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should evaluate a valid expression', () => {
    expect(service.evaluate('8+1')).toBe('9');
    expect(service.evaluate('10-3*2')).toBe('4');
    expect(service.evaluate('4/2+1')).toBe('3');
  });

  it('should throw for invalid expression', () => {
    expect(() => service.evaluate('8++1')).toThrow();
    expect(() => service.evaluate('abc')).toThrow();
  });
});
