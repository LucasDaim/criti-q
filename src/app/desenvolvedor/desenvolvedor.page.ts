import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-desenvolvedor',
  templateUrl: './desenvolvedor.page.html',
  styleUrls: ['./desenvolvedor.page.scss'],
})
export class DesenvolvedorPage implements OnInit {

 constructor(private rota:Router) { }
  retornar(){
    this.rota.navigateByUrl('')
  }
ngOnInit() {
}
}
