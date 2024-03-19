import type { FC } from 'react';
import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'Inactive',
  states: {
    Inactive: {
      on: { toggle: 'Active' },
    },
    Active: {
      on: { toggle: 'Inactive' },
    },
  },
});

const App: FC = () => {
  const [state, send] = useMachine(toggleMachine);

  return (
    <div>
      <div>Value: {state.value.toString()}</div>
      <button onClick={() => send({ type: 'toggle' })}>Toggle</button>
    </div>
  );
};

export default App;
