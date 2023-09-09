import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroimageComponent } from './heroimage.component';

describe('HeroimageComponent', () => {
  let component: HeroimageComponent;
  let fixture: ComponentFixture<HeroimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroimageComponent]
    });
    fixture = TestBed.createComponent(HeroimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
