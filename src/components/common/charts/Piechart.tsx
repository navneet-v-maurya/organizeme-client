import { useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

const Piechart = ({ data, onCellClick }: any) => {
  const [hoveredCell, setHoveredCell] = useState(null);

  return (
    <div
      className="horizontal-container"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <ResponsiveContainer width="60%" height={250}>
        <PieChart>
          <Pie
            data={data?.graph_data}
            dataKey="value"
            outerRadius={hoveredCell === null ? 90 : 95}
            innerRadius={hoveredCell === null ? 40 : 45}
            fill="#8884d8"
            paddingAngle={1}
            label
          >
            {data?.graph_data?.map((entry: any, index: any) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                onMouseEnter={() => setHoveredCell(index)}
                onMouseLeave={() => setHoveredCell(null)}
                onClick={() => onCellClick(entry)}
              />
            ))}
            <Tooltip />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="vertical-container">
        {data?.graph_data?.map((el: any, index: any) => {
          return (
            <div
              key={index}
              className="horizontal-container"
              style={{
                border: "1px solid #ddd",
                padding: "0.5rem",
                borderRadius: "3px",
                cursor: "pointer",
                gap: "1rem",
              }}
              onClick={() => onCellClick(el)}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "1px",
                  backgroundColor: el.color,
                }}
              ></div>
              <p>{el.name}</p>
              <p>{el.tasks.length}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Piechart;
