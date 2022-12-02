import React from 'react';
import TodoList from './Components/TodoList'
import NewTodo from './Components/NewTodo'
//function App() {
//  return (<div className="App"></div>);
//}

const App: React.FC = () => {

  const todos = [{id: 't1', text: 'finish TypeScript course'}]
  return (
    <div className="App">
    <NewTodo />
      <TodoList items={todos} />
    </div>
  );
}
export default App;
