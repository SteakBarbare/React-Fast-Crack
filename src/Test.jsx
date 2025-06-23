import { useState } from "react";
import Table from "./Table";

function Test() {
  const [saucisseData, setSaucisseData] = useState([
    {
      name: "Hey",
      type: "I'm here"
    },
    {
      name: "Because",
      type: "These data"
    },
    {
      name: "Were ppassed",
      type: "From my parent"
    }
  ]);

  const removeRow = index => {
    setSaucisseData(
      saucisseData.filter((currentData, i) => {
        return i !== index;
      })
    );
  };

  return (
    <>
      <div className="Test">
        <h1>Saucisse</h1>
        <Table tableContent={saucisseData} removeRow={removeRow} />
      </div>
    </>
  );
}

export default Test;
