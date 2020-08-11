import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddComparePage } from './add-compare.page';

describe('AddComparePage', () => {
  let component: AddComparePage;
  let fixture: ComponentFixture<AddComparePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComparePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddComparePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
