import { TestBed } from '@angular/core/testing';
import { IngredientsService } from './ingredients.service';
describe('IngredientsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(IngredientsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=ingredients.service.spec.js.map