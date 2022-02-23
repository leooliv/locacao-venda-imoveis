import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CepResponse } from 'src/app/shared/models/cep-finder.model';
import { CepFinderService } from 'src/app/shared/services/cep-finder/cep-finder.service';

@Component({
  templateUrl: './cep-finder.component.html',
  styleUrls: ['./cep-finder.component.scss'],
})
export class CepFinderComponent implements OnDestroy {
  cepValue: string;
  cepResponse: CepResponse;
  cepResponse$: Observable<CepResponse>;
  cepResponse$$: Subscription;

  constructor(private cepFinderService: CepFinderService) {}

  ngOnDestroy(): void {
    this.cepResponse$$?.unsubscribe();
  }

  onSubmit() {
    this.cepResponse$ = this.cepFinderService.findByCep(this.cepValue);
    this.cepResponse$$ = this.cepResponse$.subscribe(
      (res) => (this.cepResponse = res)
    );
  }
}
