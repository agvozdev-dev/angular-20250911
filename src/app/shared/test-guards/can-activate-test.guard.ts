import {CanActivateFn} from '@angular/router';

export const canActivateTestGuard: CanActivateFn = (_route, _state) => {
    // eslint-disable-next-line no-restricted-globals, no-alert
    return confirm('Разрешить переход на данную страницу?');
};
