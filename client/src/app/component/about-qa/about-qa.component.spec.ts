import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutQAComponent } from './about-qa.component';

describe('AboutQAComponent', () => {
  let component: AboutQAComponent;
  let fixture: ComponentFixture<AboutQAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutQAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
