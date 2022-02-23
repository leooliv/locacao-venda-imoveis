import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealEstateListComponent } from './real-estate-list.component';
import { RouterModule, Routes } from '@angular/router';
import { RealEstateService } from 'src/app/shared/services/real-estate/real-estate.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = <Routes>[
  { path: '', component: RealEstateListComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [RealEstateListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  providers: [RealEstateService],
})
export class RealEstateListModule {}
