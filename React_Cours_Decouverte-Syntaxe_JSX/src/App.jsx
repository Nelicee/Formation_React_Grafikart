
const todos = [
  'Présenter react',
  'Présenter le JSX',
  'Créer des composants'
]
function App() {
  return (
    <>
    <Title color="blue" id="monid" className="maclass" data-demo="demo"  >Mon composant</Title>
      <input type="text" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente magnam molestias sequi dolores, officia ipsa iure debitis porro ut cum maiores architecto odit blanditiis impedit obcaecati doloribus, sed alias repellendus.</p>
      <ul>
        {todos.map(todo => (<li style={{listStyle: 'none'}} key ={todo}>{todo}</li>))}
      </ul>
    </>
  );
}

function Title({color, hidden, ...props}) {
  if(hidden){
    return null
  }

  
  return <h1 style={{color: color}} {...props}/>
}

export default App;
