import { Component } from '@angular/core';

@Component({
  selector: 'app-app-parent',
  templateUrl: './app-parent.component.html',
  styleUrls: ['./app-parent.component.css']
})
export class AppParentComponent {
  search: string = '';
  leena: string = 'sumanth';
  getSearchText(value: any) {
    alert(value);
  }


}
