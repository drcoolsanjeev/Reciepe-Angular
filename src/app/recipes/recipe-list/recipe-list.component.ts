import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe(' A test recipe',' this is a test recipe', 
    'https://i.ndtvimg.com/i/2017-10/chicken-chettinad_620x330_41507621839.jpg'),
    new Recipe(' A test recipe',' this is a test recipe', 
    'https://i.ndtvimg.com/i/2017-10/chicken-chettinad_620x330_41507621839.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
