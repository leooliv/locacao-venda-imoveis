import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/real-estate-list/real-estate-list.module').then(
        (m) => m.RealEstateListModule
      ),
  },
  {
    path: 'cep-finder',
    loadChildren: () =>
      import('./pages/cep-finder/cep-finder.module').then(
        (m) => m.CepFinderModule
      ),
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
