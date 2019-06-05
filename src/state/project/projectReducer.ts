import { ProjectAction } from './projectActions';
import { defaultProjectSlice, ProjectSlice } from './projectSlice';


export const projectReducer = (slice: ProjectSlice = defaultProjectSlice, action: ProjectAction): ProjectSlice => {
  switch (action.type) {

    /**  */
    case 'ADD_MINISTER': {
      return {
        ...slice,
        ministers: [
          ...slice.ministers,
          {
            id: '',
            name: '',
            color: '',
            description: '',
            iconId: '',
          },
        ],
      };
    }

    /**  */
    case 'ADD_TODO_ITEM': {
      return {
        ...slice,
        todoItems: [
          ...slice.todoItems,
          {
            id: '',
            name: '',
            description: '',
            ratingByMinisterId: {},
          },
        ],
      };
    }

    /**  */
    default:
      ((a: never) => a)(action);
      return slice;
  }
};
