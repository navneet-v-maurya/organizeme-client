import React, { useState } from "react";
import "./Dashboard.css";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

const Dashboard = () => {
  const data = [
    {
      name: "Created",
      value: 5,
      color: "#00C49F",
      tasks: ["taking dog to park"],
    },
    {
      name: "Progress",
      value: 2,
      color: "#FFBB28",
      tasks: ["taking dog to park", "what the hell"],
    },
    {
      name: "Completed",
      value: 1,
      color: "#FF8042",
      tasks: [],
    },
  ];

  const [selectedTasks, setSelectedTasks] = useState(data[0].tasks);
  const [hoveredCell, setHoveredCell] = useState(null);

  const handleCellClick = (tasks: any) => {
    setSelectedTasks(tasks);
  };

  return (
    <div className="vertical-container">
      <div>
        <input className="input" type="date" />
      </div>
      <div className="charts">
        <div className="dashboard">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                outerRadius={hoveredCell === null ? 90 : 95}
                innerRadius={hoveredCell === null ? 40 : 45}
                fill="#8884d8"
                paddingAngle={1}
                label
              >
                {data.map((entry: any, index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    onMouseEnter={() => setHoveredCell(index)}
                    onMouseLeave={() => setHoveredCell(null)}
                    onClick={() => handleCellClick(entry.tasks)}
                  />
                ))}
                <Tooltip />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="task-table">
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                </tr>
              </thead>
              <tbody>
                {selectedTasks.map((task, index) => (
                  <tr key={index}>
                    <td>{task}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>another chart</div>
      </div>
    </div>
  );
};

export default Dashboard;
