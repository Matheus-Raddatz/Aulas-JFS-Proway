import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent {
  idct:string = ''
  constructor(private route: ActivatedRoute) {
    this.idct = this.route.snapshot.paramMap.get('contato') || ''
  }
}
