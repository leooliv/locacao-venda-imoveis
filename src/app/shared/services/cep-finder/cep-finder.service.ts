import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CepResponse } from '../../models/cep-finder.model';

@Injectable({
  providedIn: 'root',
})
export class CepFinderService {
  constructor(private httpService: HttpClient) {}

  findByCep(cep: string): Observable<CepResponse> {
    return this.httpService.get<CepResponse>(
      `${environment.cepFinderUrl}/${cep}/json`
    );
  }
}
