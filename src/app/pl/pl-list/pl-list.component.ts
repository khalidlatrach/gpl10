import { Component, Input, OnInit } from '@angular/core';
import { PlService } from 'src/app/services/pl.service';

@Component({
  selector: 'app-pl-list',
  templateUrl: './pl-list.component.html',
  styleUrls: ['./pl-list.component.css'],
})
export class PlListComponent implements OnInit {
  pls: any[] = [];
  idPl: number = 0;

  nom: string = '';
  prenom: string = '';

  constructor(private plService: PlService) {}

  ngOnInit(): void {
    this.pls = this.plService.pl;
  }

  addPl() {
    this.pls.push({
      idPl: this.pls.length + 1,
      nom: this.nom,
      prenom: this.prenom,
    });
    this.nom = '';
    this.prenom = '';
  }
}
