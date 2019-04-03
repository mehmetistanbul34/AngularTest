import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenemeCssComponent } from './deneme-css.component';

describe('DenemeCssComponent', () => {
  let component: DenemeCssComponent;
  let fixture: ComponentFixture<DenemeCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenemeCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenemeCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
