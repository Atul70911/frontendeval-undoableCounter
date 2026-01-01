import React from "react";
import "./History.css";

const History = ({ history }) => {
  const { past, present, future } = history;

  return (
    <section className="history">
      <h3 className="historyTitle">History</h3>

      <div className="historyGrid">
        <div className="historyCol">
          <h4>Past</h4>
          {past.length === 0 ? (
            <p className="historyEmpty">(empty)</p>
          ) : (
            <ol className="historyList">
              {past.map((v, i) => (
                <li key={`p-${i}`}>{v}</li>
              ))}
            </ol>
          )}
        </div>

        <div className="historyCol">
          <h4>Present</h4>
          <p className="historyPresent">{present}</p>
        </div>

        <div className="historyCol">
          <h4>Future</h4>
          {future.length === 0 ? (
            <p className="historyEmpty">(empty)</p>
          ) : (
            <ol className="historyList">
              {future.map((v, i) => (
                <li key={`f-${i}`}>{v}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
};

export default History;
