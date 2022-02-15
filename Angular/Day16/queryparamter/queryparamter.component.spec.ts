import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryparamterComponent } from './queryparamter.component';

describe('QueryparamterComponent', () => {
  let component: QueryparamterComponent;
  let fixture: ComponentFixture<QueryparamterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryparamterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryparamterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
