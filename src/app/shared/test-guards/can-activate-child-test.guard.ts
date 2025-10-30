import {CanActivateChildFn} from '@angular/router';

export const canActivateChildTestGuard: CanActivateChildFn = (_childRoute, _state) => {
    // eslint-disable-next-line no-restricted-globals, no-alert
    return confirm('Разрешить переход на дочернюю страницу?');
};
