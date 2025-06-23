function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const rows = props.tableContent.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.type}</td>
        <td>
          <button onClick={() => props.removeRow(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

function Table(props) {
  return (
    <>
      <table className="mainTable">
        <TableHeader />
        <TableBody
          tableContent={props.tableContent}
          removeRow={props.removeRow}
        />
      </table>
    </>
  );
}

export default Table;
