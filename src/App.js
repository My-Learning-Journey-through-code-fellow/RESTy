import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


const App = (props) => {

  const [data, setData] = useState(null);
  const [requestParams, setParams] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const callAPI = async (requestParams) => {

      setLoading(true);

      const data = await axios(requestParams);

      setData(data.data);
      setParams(requestParams);
      setLoading(false);
    }
    callAPI(requestParams);
  }, [requestParams])

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form setParams={setParams} setLoading={setLoading} />
      <Results data={data} loading={loading}/>
      <Footer />
    </React.Fragment>
  );

}

export default App;