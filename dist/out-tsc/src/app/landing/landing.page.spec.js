import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LandingPage } from './landing.page';
describe('LandingPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LandingPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(LandingPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=landing.page.spec.js.map