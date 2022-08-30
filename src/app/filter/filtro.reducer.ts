import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';
import {filtrosValidos} from './filtro.actions'

export const initialState: filtrosValidos = 'todos';

export const filtroReducer = createReducer<filtrosValidos>(
  initialState,
  on(actions.setFiltro, (state, {filtro}) => filtro),
);

export function _filtroReducer(state: any, action: any) {
    return filtroReducer(state, action);
  }
  