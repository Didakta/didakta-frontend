const Table = ({ table, classprefix }) => {
  return (
    <div className={`${classprefix}-table-ct`}>
      <table className={`${classprefix}-table`}>
        <tbody>
          {table.map((row, i) => {
            return (
              <tr key={i.toString()} className={`${classprefix}-table-row`}>
                {row.map((e, itd) => {
                  return (
                    <td
                      key={itd.toString()}
                      className={`${classprefix}-table-cell`}
                    >
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
