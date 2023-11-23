import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementatorComponent } from './incrementator.component';

describe('IncrementatorComponent', () => {
  let component: IncrementatorComponent;
  let fixture: ComponentFixture<IncrementatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
