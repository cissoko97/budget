import { Directive, Input, OnChanges, SimpleChanges, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, range, Scheduler, SchedulerLike } from 'rxjs';

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective implements OnChanges, OnDestroy {

  @Input() from: number;
  @Input() to: number;
  shedule: SchedulerLike;
  counter: Observable<number>;
  @Output() emitNumber: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    let saut: number;
    saut = this.to - this.from;

    this.counter = range(1, Math.abs(saut));
    this.counter.subscribe(x => {
      setTimeout(() => {
        this.emitNumber.emit({
          sign: (Math.sign(saut) === -1) ? -1 : 1,
          step: 1
        });
      }, 750);
      console.log(`emition du chiffre un ${x}`);
    });
  }

  ngOnDestroy(): void {
  }
}
