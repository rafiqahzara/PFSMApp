import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EditProfilePage } from './edit-profile.page';
describe('EditProfilePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditProfilePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(EditProfilePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-profile.page.spec.js.map