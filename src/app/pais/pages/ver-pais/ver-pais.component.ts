import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: 'ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorCIOC(id)),
        tap((resp) => console.log(resp[0].name.common))
      )
      .subscribe((pais) => {
        this.pais = pais[0];
      });

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);

    //   this.paisService.getPaisPorCIOC(id).subscribe(({name}) => {
    //       console.log('pais',name)
    //     // this.pais = pais;
    //   });
    // });
  }
}
