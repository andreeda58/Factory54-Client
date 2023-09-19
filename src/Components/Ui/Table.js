
function Table({ data, config, keyFn }) {

  
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData,index) => {
    const renderedCells = config.map((column) => {
      return (
        <td  key={keyFn(column)}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr  key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table >
      <thead>
        <tr >{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
