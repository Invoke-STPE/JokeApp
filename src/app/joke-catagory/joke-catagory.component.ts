import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ITwoPartJoke } from '../itwo-part-joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke-catagory',
  templateUrl: './joke-catagory.component.html',
  styleUrls: ['./joke-catagory.component.css']
})
export class JokeCatagoryComponent implements OnInit {
  
  joke : ITwoPartJoke = {category: "", type: "", setup: "", delivery: "", id: "", lang: ""  };
  constructor(private _jokeService : JokeService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.getJokeFromCategory();
  }

  getJokeFromCategory() {
    const routeParam = this._route.snapshot.paramMap.get('Catagory')!;
    this._jokeService.getJokeFromCatagory(routeParam).subscribe(result => this.joke = result);
  }

}
