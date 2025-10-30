import {CanDeactivateFn} from '@angular/router';

export const canDeactivateTestGuard: CanDeactivateFn<unknown> = (
    component,
    _currentRoute,
    _currentState,
    _nextState,
) => {
    console.log(component);
    // eslint-disable-next-line no-restricted-globals, no-alert
    return confirm('Разрешить покинуть данную страницу?');
};
