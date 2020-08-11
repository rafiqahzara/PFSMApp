import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewDisplayPage } from './review-display.page';

describe('ReviewDisplayPage', () => {
  let component: ReviewDisplayPage;
  let fixture: ComponentFixture<ReviewDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewDisplayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
