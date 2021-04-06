
import { Context } from "./utils/Context";
import { reducer, initialState } from './utils/reducer'
import {ContextDevTool} from 'react-context-devtool';
import React , {useMemo, useReducer} from  'react'
import Landing from "./screens/Landing";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const ContextValue = useMemo(() => ({state, dispatch}), [state, dispatch])
  // Axios.defaults.baseURL =
  //   "https://shinyviewmotors.com/staging-api/public/api/v1";
  return (
    <Context.Provider value={ContextValue} displayName="RootContext">
    <ContextDevTool context={Context} id="RootContext" displayName="RootContext" />
    <Landing/>
  </Context.Provider>
  );
}

export default App;
