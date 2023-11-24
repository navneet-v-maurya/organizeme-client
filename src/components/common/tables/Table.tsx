const Table = ({ tasks }: any) => {
  return (
    <div className="task-table">
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.tasks?.length === 0 ? (
            <p>No task found</p>
          ) : (
            tasks?.tasks?.map((task: any, index: any) => (
              <tr key={index}>
                <td>{task}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
