import {h, Fragment} from 'preact';
import {useState} from 'preact/hooks';
import register from 'preact-custom-element';

const Counter = ({counter}: {counter: number}) => {
  const [state, setState] = useState(Number(counter));
  const [toggle, setToggle] = useState(true);
  return (
    <Fragment>
      <h2>This is a Counter</h2>
      <button
        data-cy="counter-button"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setState(state + 1)}
      >
        count
      </button>

      <div data-cy="counter-value"> {state}</div>

      <button
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => setToggle(!toggle)}
      >
        Toggle it
      </button>
      {toggle && <div class="bg-blue-500  text-white">i am here </div>}
    </Fragment>
  );
};

register(Counter, 'x-counter');
