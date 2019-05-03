import { ProjectAction } from './projectActions';
import { defaultProjectSlice, Minister, ProjectSlice, TodoItem } from './projectSlice';


export const projectReducer = (slice: ProjectSlice = defaultProjectSlice, action: ProjectAction): ProjectSlice => {
  switch (action.type) {

    /**  */
    case 'ADD_MINISTER': {
      const newMinister: Minister = {
        id: '',
        name: '',
        color: '',
        description: '',
        iconId: '',
      };
      return {
        ...slice,
        ministers: [
          ...slice.ministers,
          newMinister,
        ],
      };
    }

    /**  */
    case 'ADD_TODO_ITEM': {
      const newTodoItem: TodoItem = {
        id:
      }
    }

    /**  */
    default:
      ((a: never) => a)(action);
      return slice;
  }
};
