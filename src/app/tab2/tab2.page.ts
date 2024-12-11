import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  searchText: string = '';

  constructor() {}

  onSearch(event: any) {
    const searchValue = event.target.value;
    console.log('Pesquisa:', searchValue);
  }
}
