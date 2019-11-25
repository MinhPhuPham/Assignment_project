import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAssComponent } from './home-ass.component';

describe('HomeAssComponent', () => {
  let component: HomeAssComponent;
  let fixture: ComponentFixture<HomeAssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
