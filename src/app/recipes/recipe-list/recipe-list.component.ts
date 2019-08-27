import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1' ,'This is simply a test','https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_960_720.jpg'),
    new Recipe('Test Recipe 2' ,'This is simply a test','https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')
  ];

  constructor() { }

  ngOnInit() {
  }

}
