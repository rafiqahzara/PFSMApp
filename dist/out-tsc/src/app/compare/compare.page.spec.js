import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ComparePage } from './compare.page';
describe('ComparePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComparePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ComparePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=compare.page.spec.js.map