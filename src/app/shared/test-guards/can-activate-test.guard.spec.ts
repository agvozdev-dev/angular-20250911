import {TestBed} from '@angular/core/testing';
import {CanActivateFn} from '@angular/router';

import {canActivateTestGuard} from './can-activate-test.guard';

describe('canActivateTestGuard', () => {
    const executeGuard: CanActivateFn = (...guardParameters) =>
        TestBed.runInInjectionContext(() => canActivateTestGuard(...guardParameters));

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should be created', () => {
        expect(executeGuard).toBeTruthy();
    });
});
