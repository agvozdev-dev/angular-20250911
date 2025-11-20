import {Component} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {NgOptimizedImage} from '@angular/common';

@Component({
    selector: 'app-header',
    imports: [MatToolbar, MatIcon, MatIconButton, NgOptimizedImage],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    protected readonly title = 'Header';
    protected readonly imgUrl = './favicon.ico';
    protected readonly onclick = onclick;

    protected menuClick($event: PointerEvent) {
        console.log('menu clicked');
    }
}
