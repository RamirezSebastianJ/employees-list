import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-employ',
  templateUrl: './count-employ.component.html',
  styleUrls: ['./count-employ.component.scss']
})
export class CountEmployComponent implements OnInit {

  @Input() all: number;
  @Input() female: number;
  @Input() male: number;

  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSelected = 'All';

  constructor() {
    this.all = 0;
    this.female = 0;
    this.male = 0;
  }

  ngOnInit(): void {
  }

  radioChange(){
    console.log('radioChangeujihsugh');
    this.countRadioButtonChange.emit(this.radioButtonSelected);
  }

}
