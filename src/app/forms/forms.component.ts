import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  public listComidas: Array<{comida: string, preco: string}> = [
    {comida: "Lanche", preco: "R$ 20,00"},
    {comida: "Salada", preco: "R$ 15,00"},
    {comida: "Massas", preco: "R$ 40,00"},
    {comida: "Churrasco", preco: "R$ 50,00"}
  ]
}
