import * as React from 'react';
import './App.css';


export const App = () => {
  return (
    <div className="app-gridContainer">
      <div className="app-gridItem app-ministerSlot">minister</div>
      <div className="app-gridItem app-todoSlot">todo</div>
      <div className="app-gridItem app-detailSlot">detail</div>
    </div>
  );
};
