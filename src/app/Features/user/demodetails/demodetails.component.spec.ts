import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemodetailsComponent } from './demodetails.component';

describe('DemodetailsComponent', () => {
  let component: DemodetailsComponent;
  let fixture: ComponentFixture<DemodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemodetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
