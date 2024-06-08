// // src/App.tsx
// import React, { useEffect, useState } from "react";
// import { fetchActivityData } from "./api";
// import ActivityChart from "./components/ActivityChart";
// import ActivityTable from "./components/ActivityTable";
// import SummaryStats from "./components/SummaryStats";
// import "./App.css";

// const App: React.FC = () => {
//   const [data, setData] = useState<any[]>([]);

//   useEffect(() => {
//     const getData = async () => {
//       const activityData = await fetchActivityData();
//       setData(activityData.rows);
//     };
//     getData();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Developer Activity Dashboard</h1>
//       <div className="chart-container">
//         <ActivityChart data={data} />
//       </div>
//       <div className="table-container">
//         <ActivityTable data={data} />
//       </div>
//       <div className="summary-container">
//         <SummaryStats data={data} />
//       </div>
//     </div>
//   );
// };

// export default App;
// src/App.tsx
import React, { useEffect, useState } from "react";
import { fetchActivityData } from "./api";
import ActivityChart from "./components/ActivityChart";
import ActivityTable from "./components/ActivityTable";
import SummaryStats from "./components/SummaryStats";
import { Activity } from "./types";

const App: React.FC = () => {
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const activityData = await fetchActivityData();
      setData(activityData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ActivityChart data={data} />
      <ActivityTable data={data} />
      <SummaryStats data={data} />
    </div>
  );
};

export default App;
