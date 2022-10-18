
/*
Break out the Todo() functionality and put it into a component to list each of the items on our Todo list.
3 parameters
    1.index function
    2.todo function
    3.remove function
Create the handle() function for the onClick event. I'm simply going to 'remove', and pass the '(index);'. This is the function that is dedicated to removing an item from the Todo list.
*/
function Todo({todo,index,remove}){
    function handle(){
      console.log('Ping:',index);
      remove(index);
    }
    return <div className="todo" onClick={handle}>{todo.text} (-Remove)</div>
  }
//========================
export default Todo;