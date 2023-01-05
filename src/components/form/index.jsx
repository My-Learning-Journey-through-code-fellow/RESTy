import React, { useState } from 'react';
import './form.scss';

const Form = (props) => {

  const [jsonData, setJsonData] = useState();
  const [currentMethod, setMethod] = useState('GET');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.upload.value);
    const formData = {
      method: currentMethod,
      url: url,
      json: jsonData,
    };
    props.setParams(formData);
  }

  const setActiveClass = (method) => {
    return method === currentMethod ? 'active' : '';
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input data-testid="form-input" name='url' type='text' onChange={(e) => setUrl(e.target.value)} />
          <button data-testid="submit-button" type="submit">GO!</button>
        </label>
        <label>Update API:</label>
        <textarea id='upload' name='upload' onChange={(e) => setJsonData(e.target.value)} rows='5' cols='33'>
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

export default Form;
