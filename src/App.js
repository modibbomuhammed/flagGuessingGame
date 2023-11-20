import './App.css';
import 

function App() {
  const color = ['red', 'green', 'blue', 'pink'];
  const selectedColor = color[Math.floor(Math.random() * 4)];
  return (
    <div className="flag-app">
      <header className='title-header'></header>
    </div>
  );
}

export default App;
