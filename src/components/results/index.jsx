import './results.scss';

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