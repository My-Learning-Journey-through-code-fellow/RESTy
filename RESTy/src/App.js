import React from 'react';
import { useState } from 'react';
import './App.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setParams] = useState({});
  // const [loading, setLoading] = useState(true);

  const callAPI = (requestParams) => {

    setData({
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    });

    setParams(requestParams);
  }

  // const { loading } = state;
    
  // if(loading) { // if your component doesn't have to wait for an async action, remove this block 
  //   return null; // render null when app is not ready
  // }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleAPICall={callAPI} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );

}




// class App extends React.Component {





//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     data: null,
//   //     requestParams: {},
//   //   };
//   // }

//   callApi = (requestParams) => {

//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

export default App;