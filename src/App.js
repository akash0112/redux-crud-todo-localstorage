import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import ListTodo from './components/ListTodo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/add" element={ <AddTodo/>}/>
       <Route exact path="/" element={ <ListTodo/>}/>
       <Route exact path="edit/:id" element={ <EditTodo/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
