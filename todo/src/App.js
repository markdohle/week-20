import './App.css';
import React from 'react'
import Todo from "./Components/Todo"
import TodoForm from "./Components/form"
import MyComponent from "./MyComponent"



/*
Create the App function that has the top component.
Return() the JSX.
*/
function App(){
  /*
  Add initial state with useState.
  
  Create variable 'todos' and the function to set it. Use 'set' naming convention. Call the function 'setTodos'.
  
  Use the 'useState' feature to set initial state, an array of objects.
  
  All the objects have 'text:', which is the description of the ToDo. And then they have a Boolean, 'true' or 'false' 'isCompleted'. All of them are initially 'false'.
  */
  const [todos, setTodos] = React.useState([
    /*{
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }*/        
  ]);
  /*
  Use ES6 to write the addTodo function so that todos can be accessed by handleSubmit in the form.js file.
  Set parameter = 'text' which will be the value from the form.
  */
  const addTodo = text => {
    /*Get access to the current list and add the new 'text' value.
  
    'isCompleted' is initialized to 'false' because whenever a todo is first created, it has not yet been done. Set Todos to the '(newTodos)'. Go from the old state or the current state to the new state.
    */
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  //remove todos triggered by the onClick associated with the form.
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }
  /*
  Loop through all the todos and create a '<div>' tag for each one, where the 'key' is the index value and the 'text' that is set inside the div.
  Creat divs to add styling
    1.className="app"
    2.className="todo-list"
  Create the JSX so that we can display the objects in the browser.
  Add an expression {} to take a look at the 'todos', 'map()' to them. Use parameters from the map callback signature to call each 'todo' that is passed in '. The syntax is ES6 for functions. Embed the Todo component into the expression.
  There are two components pulled in from separate files for cleaner code.
    1. Todo with 4 attributes;
      
      index={i} - The index value is {i}.
      
      todo={todo} is the value of the item on the todo list.
      remove{removeTodo} is the value of the index from the remove(index) function, which is embedded in the Todo component.
      key={i} The key value is {i} 
    2. TodoForm with 1 attribute
      addTodo={addTodo} 
  */
  return(
    <div className="app">
      <h1>ToDo List</h1>
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
        <MyComponent/>
      </div>
    </div>
  );
}
/*
Add to the 'DOM'.
Use 'ReactDOM.render()'. 
Pass the 1st parameter '< App/ >' component.
Target the element within my HTML that I'm going to pass all this content into.
Pass the second parameter 'document.getElementById'.
The 'Id' of that element is '('root')'.
*/

export default App;
