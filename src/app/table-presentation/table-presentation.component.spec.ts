import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePresentationComponent } from './table-presentation.component';

describe('TablePresentationComponent', () => {
  let component: TablePresentationComponent;
  let fixture: ComponentFixture<TablePresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePresentationComponent]
    });
    fixture = TestBed.createComponent(TablePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
