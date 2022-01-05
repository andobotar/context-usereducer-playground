import { createContext, useReducer } from 'react';

export const MonkeyContext = createContext();

const initialState = {
  first: '1.'
};

export const MonkeyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MonkeyContext.Provider value={{ state, dispatch }}>
      {children}
    </MonkeyContext.Provider>
  );
};

export const ACTIONS = {
  SECOND: 'ezigazabolbarmilehet',
  THIRD: 'megezis',
  CALL_API: 'hatmegez'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SECOND:
      if (Object.keys(state).includes('second')) {
        const stateCopy = { ...state };
        delete stateCopy.second;
        return { ...stateCopy };
      } else {
        return { ...state, second: action.payload?.text || '2.' };
      }
    case ACTIONS.THIRD:
      return { ...state, third: '3.' };
    case ACTIONS.CALL_API:
      return { ...state, 'the man is called': action.payload.name };
    default:
      return state;
  }
};
