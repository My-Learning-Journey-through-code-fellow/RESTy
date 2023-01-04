import React, { useState } from 'react';
import './form.scss';

const Form = (props) => {

  const { handleAPICall } = props;

  const [currentMethod, setMethod] = useState('GET');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.upload.value);
    const formData = {
      method: currentMethod,
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    handleAPICall(formData);
  }

  const setActiveClass = (method) => {
    return method === currentMethod ? 'active' : '';
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label>Update API:</label>
        <textarea id='upload' name='upload'
          rows='5' cols='33'>
        </textarea>
        <label className="methods">
          <span id='get' className={setActiveClass('GET')} onClick={() => setMethod('GET')}>GET</span>
          <span id='post' className={setActiveClass('POST')} onClick={() => setMethod('POST')}>POST</span>
          <span id='put' className={setActiveClass('PUT')} onClick={() => setMethod('PUT')}>PUT</span>
          <span id='delete' className={setActiveClass('DELETE')} onClick={() => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  );

}


// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

export default Form;