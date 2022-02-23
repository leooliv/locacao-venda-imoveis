import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealEstateListComponent } from './real-estate-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = <Routes>[
  { path: '', component: RealEstateListComponent },
];

@NgModule({
  declarations: [RealEstateListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RealEstateListModule {}
