import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { ICatagory } from './icatagory';
import { ITwoPartJoke } from './itwo-part-joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  catagoriesURL: string = "https://v2.jokeapi.dev/categories";
  jokeCategoryURL: string = "https://v2.jokeapi.dev/joke/"
  submitJokeURL: string = "https://v2.jokeapi.dev/submit?dry-run"; // Dry run ensures I doesn't actually save to the api, so I don't spam with stupid test cases.
  constructor(private _http: HttpClient) { }
  getCatagories(): Observable<ICatagory> {
    return this._http.get<ICatagory>(this.catagoriesURL);
  }
  getJokeFromCatagory(catagory : string) : Observable<ITwoPartJoke> {
    return this._http.get<ITwoPartJoke>(`${this.jokeCategoryURL}${catagory}?type=twopart`);
  }
  addJoke(postRequest : {}) : Observable<Object> {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(postRequest);
    return this._http.post(this.submitJokeURL, body,{'headers':headers})
  }
}
