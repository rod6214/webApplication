import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  @Input() img:string;
  @Input() mutedText:string;
  @Input() text:string;
  @Input() link:string;
  @Input() title:string;
  @Input() imageName:string;

  constructor() { }

  ngOnInit() {
  }
}
