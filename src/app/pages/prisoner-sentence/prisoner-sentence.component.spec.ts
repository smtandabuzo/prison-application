import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisonerSentenceComponent } from './prisoner-sentence.component';

describe('PrisonerSentenceComponent', () => {
  let component: PrisonerSentenceComponent;
  let fixture: ComponentFixture<PrisonerSentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrisonerSentenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrisonerSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
