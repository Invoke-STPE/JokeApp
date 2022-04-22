import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICatagory } from '../icatagory';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke-catagories',
  templateUrl: './joke-catagories.component.html',
  styleUrls: ['./joke-catagories.component.css']
})
export class JokeCatagoriesComponent implements OnInit {
  catagoryObject : ICatagory = {categories: []};
  // catagoryObject : ICatagory = {error: "", categories: [], categoryAliases: [], timestamp: ""};
  constructor(private _jokeService : JokeService, private _route : ActivatedRoute, private _router : Router) { }

  ngOnInit(): void {
    this._jokeService.getCatagories().subscribe({
      next: catagories => {
        this.catagoryObject = catagories;
      }
    })
  }
  public onSelectCatagory(catagory : string) {
    if (catagory === "random") {
      catagory = this.catagoryObject.categories[Math.floor(Math.random() * this.catagoryObject.categories.length)]
    }
    this._router.navigate(['catagory', catagory]);
  }

}
