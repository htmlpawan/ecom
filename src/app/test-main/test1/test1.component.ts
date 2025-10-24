import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
  @Input() item: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
