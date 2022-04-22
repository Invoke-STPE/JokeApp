import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeCatagoriesComponent } from './joke-catagories.component';

describe('JokeCatagoriesComponent', () => {
  let component: JokeCatagoriesComponent;
  let fixture: ComponentFixture<JokeCatagoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeCatagoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
