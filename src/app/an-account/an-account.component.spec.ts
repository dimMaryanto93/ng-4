import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnAccountComponent } from './an-account.component';

describe('AnAccountComponent', () => {
  let component: AnAccountComponent;
  let fixture: ComponentFixture<AnAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
