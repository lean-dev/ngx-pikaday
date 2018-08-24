import { Directive, ElementRef, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import Pikaday from 'pikaday';

@Directive({
  selector: 'input[datepika]'
})
export class DatepikaDirective implements OnInit, OnChanges {
 
  @Input()
  datepika: Date;

  @Output()
  datepikaChange = new EventEmitter<Date>();

  @Output()
  dateStelected = new EventEmitter<Date>();
  
  constructor(private elt: ElementRef) { }

  private picker;

  ngOnInit(): void {
    this.picker = new Pikaday(
      {field: this.elt.nativeElement,
      defaultDate: this.datepika,
      onSelect: (date) => { 
        this.datepikaChange.emit(date)
      }
    }
    );
  }


  ngOnChanges(): void {
  }
  
}
