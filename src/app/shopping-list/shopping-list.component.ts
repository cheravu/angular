import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient ('Apples',5,'https://cdn.pixabay.com/photo/2018/08/02/21/51/red-3580560_960_720.jpg'),
    new Ingredient ('Tomato',10,'https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356_960_720.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
