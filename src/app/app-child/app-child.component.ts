import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent {
  searchText: string = '';
  @Input() item: string = '';
  @Output() searchTextEmitter = new EventEmitter<string>();
  addText() {
    this.searchTextEmitter.emit(this.searchText);
  }

}
