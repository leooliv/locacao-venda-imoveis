import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepFinderComponent } from './cep-finder.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CepFinderService } from 'src/app/shared/services/cep-finder/cep-finder.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = <Routes>[
  { path: '', component: CepFinderComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [CepFinderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [CepFinderService],
})
export class CepFinderModule {}
