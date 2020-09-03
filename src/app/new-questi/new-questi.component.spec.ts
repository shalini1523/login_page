import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestiComponent } from './new-questi.component';

describe('NewQuestiComponent', () => {
  let component: NewQuestiComponent;
  let fixture: ComponentFixture<NewQuestiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuestiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
