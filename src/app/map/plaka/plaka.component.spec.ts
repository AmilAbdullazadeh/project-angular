import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlakaComponent } from './plaka.component';

describe('PlakaComponent', () => {
  let component: PlakaComponent;
  let fixture: ComponentFixture<PlakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
