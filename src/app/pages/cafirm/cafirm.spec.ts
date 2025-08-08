import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafirm } from './cafirm';

describe('Cafirm', () => {
  let component: Cafirm;
  let fixture: ComponentFixture<Cafirm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cafirm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cafirm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
