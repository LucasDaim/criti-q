import { Component, OnInit } from '@angular/core';
import { SneakerService } from '../sneaker.service';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.scss']
})
export class SneakersComponent implements OnInit {
  sneakers: any[] = [];
  loading = false;

  constructor(private sneakerService: SneakerService) {}

  ngOnInit(): void {
    this.fetchSneakers();
  }

  fetchSneakers(): void {
    this.loading = true;
    this.sneakerService.getSneakers().subscribe(
      (data) => {
        this.sneakers = data.results; // Ajuste conforme a estrutura da API
        this.loading = false;
      },
      (error) => {
        console.error('Erro ao buscar sneakers:', error);
        this.loading = false;
      }
    );
  }
}