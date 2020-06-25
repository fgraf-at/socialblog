import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    sidenavBreakpoint = 750;
    sidenavFixedTopGap = 65;
    opened = true;
    @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

    ngOnInit() {
        this.sidenavBreakpointLogic(window.innerWidth);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.sidenavBreakpointLogic(event.target.innerWidth);
    }

    sidenavBreakpointLogic(checkWidth) {
        if (checkWidth < this.sidenavBreakpoint) {
            this.opened = false;
        } else {
            this.opened = true;
        }
        this.sidenav.fixedTopGap = this.sidenavFixedTopGap;
    }

    isBiggerScreen() {
        const width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        if (width < this.sidenavBreakpoint) {
            return true;
        } else {
            return false;
        }
    }
}
