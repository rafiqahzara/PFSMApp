import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewComparePage } from './view-compare.page';

describe('ViewComparePage', () => {
  let component: ViewComparePage;
  let fixture: ComponentFixture<ViewComparePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComparePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewComparePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
