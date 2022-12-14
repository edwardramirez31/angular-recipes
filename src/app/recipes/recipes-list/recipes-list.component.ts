import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Chicken',
      'Chicken description here',
      'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
