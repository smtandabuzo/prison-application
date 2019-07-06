import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'cases', loadChildren: './pages/cases/cases.module#CasesModule' },
  { path: 'transfer', loadChildren: './pages/transfer/transfer.module#TransferModule'},
  { path: 'registration', loadChildren: './pages/registration/registration.module#RegistrationModule'},
  { path: 'court', loadChildren: './pages/court/court.module#CourtModule'},
  { path: 'prisoners', loadChildren: './pages/prisoners/prisoners.module#PrisonersModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
