import { Routes } from '@angular/router';
import { FormRendererComponent } from './form-renderer/form-renderer.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'screen/1' },

    {
        path: 'screen/:screenId',
        component: FormRendererComponent
    },

    { path: '**', redirectTo: '' },
];
