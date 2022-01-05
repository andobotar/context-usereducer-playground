import { useCallback, useContext, useEffect } from 'react';
import { callSW } from '../../apiCalls/callStarWars';
import { ACTIONS, MonkeyContext } from '../../contexts/MonkeyContext';

export default function Monkey() {
  const { state, dispatch } = useContext(MonkeyContext);

  useEffect(() => console.log({ state }), [state]);

  const handleApiCall = useCallback(async () => {
      const name = await callSW();
      dispatch({ type: ACTIONS.CALL_API, payload: { name } });
  }, [dispatch]);
  
  return (
    <div style={{ backgroundColor: 'teal', padding: 12 }}>
      <h1 style={{ textAlign: 'center' }}>Monkey</h1>
      <div>
        {Object.entries(state).map(([key, value]) => (
          <h5 key={key}>
            {key} - {value}
          </h5>
        ))}
        <button
          onClick={() =>
            dispatch({
              type: ACTIONS.SECOND,
              payload: { text: 'mivaaaaaaaan' }
            })
          }
        >
          add 2nd
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.THIRD })}>
          add 3rd
        </button>
        <button onClick={handleApiCall}>
          call
        </button>
      </div>
    </div>
  );
}
