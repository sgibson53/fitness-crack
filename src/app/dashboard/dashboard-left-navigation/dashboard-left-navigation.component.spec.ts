import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLeftNavigationComponent } from './dashboard-left-navigation.component';

describe('DashboardLeftNavigationComponent', () => {
  let component: DashboardLeftNavigationComponent;
  let fixture: ComponentFixture<DashboardLeftNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLeftNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLeftNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
