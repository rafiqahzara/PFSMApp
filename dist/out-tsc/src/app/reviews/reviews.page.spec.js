import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReviewsPage } from './reviews.page';
describe('ReviewsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReviewsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ReviewsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reviews.page.spec.js.map