import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponentComponent } from './table-component.component';
import { FormsModule } from '@angular/forms';


describe('TableComponentComponent', () => {
  let component: TableComponentComponent;
  let fixture: ComponentFixture<TableComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [TableComponentComponent]
    });
    fixture = TestBed.createComponent(TableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate the correct number of pages', () => {
    const pageSize = 10
    const totalItems = 25

    const userData = [];
    for (let i = 1; i <= totalItems; i++) {
      userData.push(i);
    }

    component.userData = userData;
    component.pageSize = pageSize;
    const result = component.numberOfPages();

    expect(result).toBe(3); 

  });
});
