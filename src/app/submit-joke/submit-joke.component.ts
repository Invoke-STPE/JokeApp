import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICatagory } from '../icatagory';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-submit-joke',
  templateUrl: './submit-joke.component.html',
  styleUrls: ['./submit-joke.component.css']
})
export class SubmitJokeComponent implements OnInit {
  catagoryObject : ICatagory = {categories: []};
  category : string = "";
  setup : string = "";
  delivery : string = "";
  constructor(private _jokeService : JokeService, private _router : Router) { }

  ngOnInit(): void {
    this._jokeService.getCatagories().subscribe({
      next: catagories => {
        this.catagoryObject = catagories;
      }
    })
  }

  onSubmit() : void {
    const postRequest = {
      "formatVersion": 3,
      "category": `${this.category}`,
      "type": "twopart",
      "setup": `${this.setup}`,
      "delivery": `${this.delivery}`,
      "flags": {
          "nsfw": true,
          "religious": false,
          "political": true,
          "racist": false,
          "sexist": false,
          "explicit": false
      },
      "lang": "en"
  }

  this._jokeService.addJoke(postRequest);
  this._router.navigate(["catagories-list"]);
  }

}
