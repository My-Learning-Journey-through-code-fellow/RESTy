import React from 'react';
// import JSONPretty from 'react-json-pretty';
// import 'react-json-pretty/themes/monikai.css';

const Results = (props) => {

  const { data } = props;

  return (
    <>
      <section>
        <pre>{data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    </>
  );
}

export default Results;