import { Component, Input, OnInit} from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo('null');

  checkCompletado: FormControl;
  txtInput: FormControl;

  editando: boolean = false;

  constructor(private store: Store<AppState>) { 
  }

  ngOnInit(): void {
    this.checkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.text,Validators.required);
    this.checkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggleCompletado({id: this.todo.id}));
    });
  }

  editar(){
    this.editando = true;

  }
  terminarEditar(){
    this.editando = true;
    if(this.txtInput.value == this.todo.text){return;}
    if(this.txtInput.valid){
      this.store.dispatch(actions.editar({
        id: this.todo.id,
        text: this.txtInput.value
      }
      ));
    }
  }
  borrar(){
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }
}
