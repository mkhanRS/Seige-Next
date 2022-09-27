export default function TableBody({ columns, rows }) {
  return (
    <>
      {rows.map((item, i) => {
        return (
          <tr key={i} onClick={() => item.onClick && item.onClick()}>
            {columns?.map((header, i) => {
              if (header.format) {
                return (
                  <td key={header.field} style={{ textAlign: header.align }}>
                    {header.format(item[header.field])}
                  </td>
                );
              }
              return (
                <td key={header.field} style={{ textAlign: header.align }}>
                  {item[header.field]}
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
}
