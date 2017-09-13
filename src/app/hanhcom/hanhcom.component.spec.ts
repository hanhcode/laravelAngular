import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanhcomComponent } from './hanhcom.component';

describe('HanhcomComponent', () => {
  let component: HanhcomComponent;
  let fixture: ComponentFixture<HanhcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanhcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanhcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
