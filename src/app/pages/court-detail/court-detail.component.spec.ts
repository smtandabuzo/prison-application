import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtDetailComponent } from './court-detail.component';

describe('CourtDetailComponent', () => {
  let component: CourtDetailComponent;
  let fixture: ComponentFixture<CourtDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
