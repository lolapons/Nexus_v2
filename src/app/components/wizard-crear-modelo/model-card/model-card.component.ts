import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.css'],
  standalone: false
})
export class ModelCardComponent implements OnInit {
  @Input() modelName: string = '';
  @Input() selected: boolean = false;
  @Output() selectModel = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(): void {
    this.selectModel.emit(this.modelName);
  }
}