import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

//services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})

export class FoodListComponent implements OnInit{

  //feita a injeção de dependência, o service pode ser usado apenas no component
  constructor(private foodListService: FoodListService){ 
  }

  //para criar a possibilidade de usar no html, cria-se um método público
  public foodList: Array<FoodList> = [];


  ngOnInit(): void{
    
    //o método público foodList retorna um array
    this.foodListService.foodList().subscribe(
      res => this.foodList = res,
      error => console.log(error)
    )

    
    
    //this.foodListService.emitirEvento.subscribe(
    //  res => alert(`${res} foi adicionado`)
    //); //inscrição no canal que emite eventos

  }

  //public foodListDelete(id:number){
  //  return this.foodListService.foodListDelete(id).subscribe(
  //    res => {
  //      this.foodList = this.foodList.filter(
  //        item => { return id !== item.id }
  //      )

  //    }, 
  //    error => error
  //  )}
  
}
