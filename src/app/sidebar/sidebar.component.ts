import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Accueil',         icon:'nc-bank',       class: '' },
    { path: '/user',          title: 'Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Informations',        icon:'nc-tile-56',    class: '' },
    { path: '/typography',    title: 'Detection',        icon:'nc-caps-small', class: '' },
    { path: '/upgrade',       title: 'Déconnexion',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
