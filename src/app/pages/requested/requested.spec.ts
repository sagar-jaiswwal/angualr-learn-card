import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Requested } from './requested';

describe('Requested', () => {
  let component: Requested;
  let fixture: ComponentFixture<Requested>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Requested]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Requested);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
