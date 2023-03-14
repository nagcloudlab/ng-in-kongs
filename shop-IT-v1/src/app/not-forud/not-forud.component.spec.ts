import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotForudComponent } from './not-forud.component';

describe('NotForudComponent', () => {
  let component: NotForudComponent;
  let fixture: ComponentFixture<NotForudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotForudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotForudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
