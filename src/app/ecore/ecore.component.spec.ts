import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoreComponent } from './ecore.component';

describe('EcoreComponent', () => {
  let component: EcoreComponent;
  let fixture: ComponentFixture<EcoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
