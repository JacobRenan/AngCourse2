import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';


@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitirEvento = new EventEmitter() //esse canal está emitindo eventos

  //cria-se uma lista privada ao usuário
  //private list: Array<string> = [
  //  "Alimento 1",
  //  "Alimento 2",
  //  "Alimento 3"
  // ]

  //para que os elementos da lista sejam vistos pelo html, cria-se um método público
  //public foodList(){
  //  return this.list;
  //}

  //método para adicionar valores à lista 
  //public foodListAdd(value: string){
  // this.foodListAlert(value);
  //return this.list.push(value);
  //}


  //método de requisição http.get
  private url: string = "http://localhost:3000"; //listfood
  constructor(private http: HttpClient) {}

  public foodList(): Observable<Array<FoodList>>{
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    );
  }

  ///método http Post
  public foodListAdd(value: string): Observable<FoodList>{
    return this.http.post<FoodList>(`${this.url}list-food`, {nome: value}, this.httpOptions).pipe(
      res => res,
      error => error
    )
  }

  public foodListAlert(value: FoodList){
    return this.emitirEvento.emit(value);
  }

  /// método http-put e http-delete
  public foodListEdit(value: string, id: number): Observable<FoodList>{
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, {nome: value}).pipe(
      res => res,
      error => error
    )
  }

  public foodListDelete(id: number): Observable<FoodList>{
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      res => res,
      error => error
    )
  }

  /// Http headers
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 
}
