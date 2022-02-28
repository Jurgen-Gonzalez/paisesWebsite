import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-input',
  templateUrl: 'pais-input.component.html',
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';
  @Input() placeholder: string = 'Buscar';

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(500)).subscribe((termino) => {
      this.onDebounce.emit(termino);
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any) {
    this.debouncer.next(this.termino);
  }
}
