import {CanMatchFn} from '@angular/router';

export const canMatchTestGuard: CanMatchFn = (_route, _segments) => {
    // eslint-disable-next-line no-restricted-globals, no-alert
    return confirm('Разрешить применить данный конфиг?');
};
