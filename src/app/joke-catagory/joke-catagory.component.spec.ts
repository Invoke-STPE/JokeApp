import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeCatagoryComponent } from './joke-catagory.component';

describe('JokeCatagoryComponent', () => {
  let component: JokeCatagoryComponent;
  let fixture: ComponentFixture<JokeCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeCatagoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
