import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  @Input() item:String | undefined;
  @Output() outputData = new EventEmitter<String>;
  getVal:String = '';
  constructor() { }

  ngOnInit(): void {
  }

  ppc(){
    this.outputData.emit(this.getVal);
  }

}
