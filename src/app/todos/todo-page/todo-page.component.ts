import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions'

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  toggleall:boolean = false;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  toggleAll(){
    this.toggleall = !this.toggleall;
    this.store.dispatch(actions.toggleAll({complete: this.toggleall}));
  }
}
