import './history.scss'

const History = ({ history, showHistory }) => {

  return (
    <>
      <h2>History</h2>
      {
        history.map((entry, index) => (
          <label class='historyButton'>
            <button
              key={`history-${index}`}
              onClick={() => showHistory(entry)}
            >
              {entry.request.method}: {entry.request.url}
            </button>
          </label>
        ))
      }
    </>
  )

};

export default History;
