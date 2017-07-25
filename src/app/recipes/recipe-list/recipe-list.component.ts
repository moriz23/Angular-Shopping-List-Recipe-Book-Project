import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [] = [
    new Recipe('A Test Recipe', 'This is a simply a test', 'http://del.h-cdn.co/assets/16/04/parmesan-crusted-shrimp-quesadillas1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
