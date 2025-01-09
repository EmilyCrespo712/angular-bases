import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public heroNames: string[]= ['Ironman', 'Spiderman', 'SheHulk', 'Capitan America'];
  public deletedHeroe?: string;

  removeLast():void{
    this.deletedHeroe = this.heroNames.pop();
  }
}
