import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisonerPersonalComponent } from './prisoner-personal.component';

describe('PrisonerPersonalComponent', () => {
  let component: PrisonerPersonalComponent;
  let fixture: ComponentFixture<PrisonerPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrisonerPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrisonerPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
