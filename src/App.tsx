import {h} from 'preact';
import {useState} from 'preact/hooks';

function App() {
  const [state, setState] = useState(0);
  return (
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setState(state + 1)}
      >
        count
      </button>
      {state}
    </div>
  );
}

export default App;
