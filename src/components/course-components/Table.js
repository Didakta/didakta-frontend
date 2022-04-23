const Table = ({ table }) => {
  return (
    <div className="chapter-table-ct">
      <table className="chapter-table">
        <tbody>
          {table.map((row, i) => {
            return (
              <tr key={i} className="chapter-table-row">
                {row.map((e, itd) => {
                  return (
                    <td key={itd} className="chapter-table-cell">
                      {e}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
