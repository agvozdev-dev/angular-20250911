import {TestBed} from '@angular/core/testing';
import {CanActivateChildFn} from '@angular/router';

import {canActivateChildTestGuard} from './can-activate-child-test.guard';

describe('canActivateChildTestGuard', () => {
    const executeGuard: CanActivateChildFn = (...guardParameters) =>
        TestBed.runInInjectionContext(() => canActivateChildTestGuard(...guardParameters));

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should be created', () => {
        expect(executeGuard).toBeTruthy();
    });
});
