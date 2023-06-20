import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjspracComponent } from './rxjsprac.component';

describe('RxjspracComponent', () => {
  let component: RxjspracComponent;
  let fixture: ComponentFixture<RxjspracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjspracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjspracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
