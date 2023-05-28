import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiceditComponent } from './dynamicedit.component';

describe('DynamiceditComponent', () => {
  let component: DynamiceditComponent;
  let fixture: ComponentFixture<DynamiceditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiceditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamiceditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
