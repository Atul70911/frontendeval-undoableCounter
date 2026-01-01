import React from "react";
import "./UndoRedo.css";

const UndoRedo = ({ history, setHistory }) => {
  const handleUndo = () => {
    setHistory((prev) => {
      if (prev.past.length === 0) return prev;
      return {
        past: prev.past.slice(0, -1),
        present: prev.past.at(-1),
        future: [prev.present, ...prev.future],
      };
    });
  };

  const handleRedo = () => {
    setHistory((prev) => {
      if (prev.future.length === 0) return prev;

      const next = prev.future[0];
      const newFuture = prev.future.slice(1);

      return {
        past: [...prev.past, prev.present],
        present: next,
        future: newFuture,
      };
    });
  };

  return (
    <div className="undoRedo">
      <button
        className="undoRedoBtn"
        type="button"
        onClick={handleUndo}
        disabled={history.past.length === 0}
      >
        Undo
      </button>

      <button
        className="undoRedoBtn"
        type="button"
        onClick={handleRedo}
        disabled={history.future.length === 0}
      >
        Redo
      </button>
    </div>
  );
};

export default UndoRedo;
