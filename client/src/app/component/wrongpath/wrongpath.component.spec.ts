import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongpathComponent } from './wrongpath.component';

describe('WrongpathComponent', () => {
  let component: WrongpathComponent;
  let fixture: ComponentFixture<WrongpathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongpathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
