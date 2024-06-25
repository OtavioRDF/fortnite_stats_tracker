import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewPlayerComponent } from './pages/new-player/new-player.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'new-player',
        component: NewPlayerComponent
    }
];
