import React from 'react';
import List from './List'

import './App.css'

function App(props) {
  const STORE = props.store

  const masterList = (STORE.lists).map((list, i)=> {
    return <List header = {list.header} cards = {list.cardIds.map(id => STORE.allCards[id])} />
  })
  return (
    <main className='App'>
      <header className="App-header"><h1>Trelloyes!</h1></header>
      <div className="App-list">
        {masterList}
      </div>
    </main>
  );
}

export default App;