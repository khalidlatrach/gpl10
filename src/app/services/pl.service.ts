import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlService {
  constructor() {}

  pl = [{idPl:1 , nom: 'Idrissi', prenom: 'Mohamed' },
{idPl: 2, nom:'Saidi', prenom:'Amine'}
];
getpl(id:number){
  const pl = this.pl.find(
    (plObject)=>{
      return plObject.idPl === id;
    }
  );
  return pl;

}
}
