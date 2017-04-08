import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dashboard/dash/dash.component';
import { CustomerSearchComponent } from './customer/customer-search/customer-search.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';

const APP_ROUTES: Routes = [
    { path: '', component: DashComponent },
    { path: 'search', component: CustomerSearchComponent },
    { path: 'new', component: CustomerFormComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES); 