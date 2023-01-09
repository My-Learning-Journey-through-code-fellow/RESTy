import { useEffect, useReducer } from 'react';
import axios from 'axios';
import './App.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import History from './components/history';
import Results from './components/results';

const initialState = {
  data: null,
  requestParams: {},
  loading: false,
  history: [],
}

const reducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {

    case 'START_REQUEST':
      return {
        ...state,
        requestParams: payload,
        loading: true,
      }

    case 'FINISH_REQUEST':
      return {
        ...state,
        data: payload,
        loading: false,
        history: [...state.history, { request: state.requestParams, data: payload }],
      }

    case 'SHOW_HISTORY':
      return {
        ...state,
        data: payload.data,
        requestParams: payload.request
      }

    default:
      return state;
  }
};

const App = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const callAPI = (requestParams) => {
    const action = {
      type: 'START_REQUEST',
      payload: requestParams,
    }
    dispatch(action);
  }

  const showHistory = (entry) => {
    const action = {
      type: 'SHOW_HISTORY',
      payload: entry,
    }
    dispatch(action);
  }

  useEffect(() => {

    const axiosCall = async () => {

      let response = await axios(state.requestParams)

      if (Object.keys(state.requestParams).length > 0) {
        let action = {
          type: 'FINISH_REQUEST',
          payload: response.data,
        }
        dispatch(action);
      }
    }
    axiosCall();
  }, [state.requestParams])

  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleAPICall={callAPI} />
      <History history={state.history} showHistory={showHistory} />
      <Results data={state.data} loading={state.loading} />
      <Footer />
    </>
  );
}

export default App;