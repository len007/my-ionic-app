import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadsideComponent } from './broadside.component';

describe('BroadsideComponent', () => {
  let component: BroadsideComponent;
  let fixture: ComponentFixture<BroadsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
