import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddprofilePage } from './addprofile.page';

describe('AddprofilePage', () => {
  let component: AddprofilePage;
  let fixture: ComponentFixture<AddprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
