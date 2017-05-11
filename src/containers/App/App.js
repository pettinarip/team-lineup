import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import FieldContainer from '../FieldContainer'
import LayoutSelectorContainer from '../LayoutSelectorContainer'
import PlayerContainer from '../PlayerContainer'

const App = () => {
  return (
    <div>
      <header>
        <h1 className='super-title'>Team lineup</h1>
      </header>
      <div className='container'>
        <div className='content'>
          <div className='left-content'>
            <LayoutSelectorContainer />
          </div>
          <FieldContainer />
          <div className='right-content'>
            <PlayerContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DragDropContext(HTML5Backend)(App)
