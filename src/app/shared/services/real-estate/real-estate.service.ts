import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { RealEstate } from '../../models/real-estate.model';
import { Observable } from 'rxjs';

@Injectable()
export class RealEstateService {
  constructor(private httpService: HttpClient) {}

  getList(): Observable<RealEstate[]> {
    return this.httpService.get<RealEstate[]>(`${environment.apiUrl}/imovel`);
  }
}
