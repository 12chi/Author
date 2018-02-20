import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  authors = [];
  reqAuth = {id: "", name: ""};
  newAuth = {name: ""};
  updating = false;
  updAuth = {id: ""};

  ngOnInit() {
    // this.getAllAuthors();
    // console.log('init task: ', this.tasks)
  }

  constructor (private _httpService: HttpService) {}

  getAllAuthors(): void {
    console.log("get all authors")
    let tsks = this._httpService.getAuthors();
    tsks.subscribe(data => {
      this.authors = data['data'];
      console.log("authors: ", this.authors)
    });
  }

}
