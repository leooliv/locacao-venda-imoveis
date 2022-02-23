import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RealEstate } from 'src/app/shared/models/real-estate.model';
import { RealEstateService } from 'src/app/shared/services/real-estate/real-estate.service';

@Component({
  selector: 'app-real-estate-list',
  templateUrl: './real-estate-list.component.html',
  styleUrls: ['./real-estate-list.component.scss'],
})
export class RealEstateListComponent implements OnInit, OnDestroy {
  realEstateList$: Observable<RealEstate[]>;
  realEstateList$$: Subscription;

  constructor(private realEstateService: RealEstateService) {}

  ngOnInit(): void {
    this.realEstateList$ = this.realEstateService.getList();
  }

  ngOnDestroy(): void {
    this.realEstateList$$.unsubscribe();
  }
}
