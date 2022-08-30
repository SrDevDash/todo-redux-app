import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Todo } from './models/todo.model';
import * as todoActions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Watch TV'),
  new Todo('Learn RX NGRX'),
];

export const _todoReducer = createReducer(
  initialState,
  on(todoActions.crear, (state, { texto }) => [...state, new Todo(texto)]),

  on(todoActions.toggleCompletado, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),

  on(todoActions.editar, (state,{id, text}) => {
    return state.map(todo => {
      if(todo.id === id ){
        return {
          ...todo,
          text: text
        }
      }
      else{
        return todo; 
      }
    })
  }),
  on(todoActions.borrar, (state,{id}) =>  state.filter(todo => todo.id !== id)),
  on(todoActions.toggleAll,(state,{complete}) => {
    return state.map(todo => {

      return {
        ...todo,
        completado: complete,
      }
      
    });
  
  } ),
  on(todoActions.borrarCompletado,(state) => state.filter(todo => !todo.completado))
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
