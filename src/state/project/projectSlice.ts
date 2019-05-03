

/**  */
export interface ProjectSlice {
  ministers: Minister[];
  todoItems: TodoItem[];
}

export interface Minister {
  id: string;
  name: string;
  description: string;
  iconId: string; // todo: create a more specific union type or something like that
  color: string; // 7-digit hex string like #FF6600 todo: more specific type?
}

export interface TodoItem {
  id: string;
  name: string;
  description: string;
  ratingByMinisterId: {[ministerId: string]: number | null}; // rating -3 to +3 or null for 'not rated yet'
}

/**  */
export const defaultProjectSlice: ProjectSlice = {
  ministers: [],
  todoItems: [],
};
