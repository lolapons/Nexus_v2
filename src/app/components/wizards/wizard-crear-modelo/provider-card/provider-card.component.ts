import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.css'],
  standalone: false
})
export class ProviderCardComponent implements OnInit {
  @Input() providerName: string = '';
  @Input() providerImage: string = '';
  @Input() selected: boolean = false;
  @Output() selectProvider = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(): void {
    this.selectProvider.emit(this.providerName);
  }
} 