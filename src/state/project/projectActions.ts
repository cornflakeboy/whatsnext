import { FluxStandardAction } from 'flux-standard-action';
import { Omit } from '../../util/utilityTypes';
import { Minister, TodoItem } from './projectSlice';


/**  */
export interface ProjectActions {
  AddMinister: FluxStandardAction<'ADD_MINISTER', Partial<Omit<Minister, 'id'>>>;
  AddTodoItem: FluxStandardAction<'ADD_TODO_ITEM', Partial<Omit<TodoItem, 'id'>>>;
}

/**  */
export type ProjectAction = ProjectActions[keyof ProjectActions];

/**  */
export type ProjectActionType = ProjectActions[keyof ProjectActions]['type'];
