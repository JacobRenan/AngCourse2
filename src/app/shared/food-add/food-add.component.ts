import { Component, OnInit } from '@angular/core';
//services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit{
  
  //a injeção de dependência é feita no constructor
  constructor(private foodListService:FoodListService) { }
  
  ngOnInit(): void{
  }

  //cria-se um método público para adicionar o value à lista
  public listAddItem(value: string){
    return this.foodListService.foodListAdd(value).subscribe(
      res => this.foodListService.foodListAlert(res),
      error => error
    );
  }

}
