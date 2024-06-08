// src/components/ActivityChart.tsx
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface Activity {
  day: string;
  commits: number;
  pullRequests: number;
  merges: number;
  meetings: number;
  documentation: number;
}

interface ActivityChartProps {
  data: Activity[];
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    renderChart();
  }, [data]);

  const renderChart = () => {
    if (!chartRef.current || !data.length) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const labels = data.map((activity) => activity.day);
    const commitsData = data.map((activity) => activity.commits);
    const pullRequestsData = data.map((activity) => activity.pullRequests);
    const mergesData = data.map((activity) => activity.merges);
    const meetingsData = data.map((activity) => activity.meetings);
    const documentationData = data.map((activity) => activity.documentation);

    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Commits",
            data: commitsData,
            borderColor: "red",
          },
          {
            label: "Pull Requests",
            data: pullRequestsData,
            borderColor: "blue",
          },
          // Add datasets for merges, meetings, and documentation
        ],
      },
    });
  };

  return <canvas ref={chartRef} width="400" height="400"></canvas>;
};

export default ActivityChart;
