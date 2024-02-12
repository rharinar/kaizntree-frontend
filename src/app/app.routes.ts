import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
