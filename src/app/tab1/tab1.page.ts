import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: any[] = [];
  loadUsers: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadUsers();this.loadData()
  }
  data: any[] = [];

 
  loadData() {
    this.apiService.get('users').subscribe(
      (response) => {
        console.log('Dados recebidos:', response);
        this.data = response;
      },
      (error) => {
        console.error('Erro ao carregar dados:', error);
      }
    );
  }
}