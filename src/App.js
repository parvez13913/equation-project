import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import HomePage from './Component/HomePage';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <HomePage />
      </div>
    </DndProvider>
  );
}

export default App;
