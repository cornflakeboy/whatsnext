import { combineReducers, createStore, Store as ReduxStore } from 'redux';
import { connectBrowserEvents } from './connectBrowserEvents';
import { projectReducer } from './project/projectReducer';
import { ProjectSlice } from './project/projectSlice';


export type Store = ReduxStore<State>;
export interface State {
  project: ProjectSlice;
}

/**  */
const rootReducer = combineReducers({
  project: projectReducer,
});

/**  */
export const buildStore = (preloadedState: State = undefined) => {
  return connectBrowserEvents(
    createStore(
      rootReducer,
      preloadedState/*,
      applyMiddleware(asyncMiddleware)*/
    )
  );
};
