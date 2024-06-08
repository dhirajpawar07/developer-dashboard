// src/components/SummaryStats.tsx
import React from "react";

interface Activity {
  day: string;
  commits: number;
  pullRequests: number;
  merges: number;
  meetings: number;
  documentation: number;
}

interface SummaryStatsProps {
  data: Activity[];
}

const SummaryStats: React.FC<SummaryStatsProps> = ({ data }) => {
  const totalCommits = data.reduce(
    (acc, activity) => acc + activity.commits,
    0
  );
  const totalPullRequests = data.reduce(
    (acc, activity) => acc + activity.pullRequests,
    0
  );
  const totalMerges = data.reduce((acc, activity) => acc + activity.merges, 0);
  const totalMeetings = data.reduce(
    (acc, activity) => acc + activity.meetings,
    0
  );
  const totalDocumentation = data.reduce(
    (acc, activity) => acc + activity.documentation,
    0
  );

  return (
    <div>
      <h2>Summary Statistics</h2>
      <p>Total Commits: {totalCommits}</p>
      <p>Total Pull Requests: {totalPullRequests}</p>
      <p>Total Merges: {totalMerges}</p>
      <p>Total Meetings: {totalMeetings}</p>
      <p>Total Documentation: {totalDocumentation}</p>
    </div>
  );
};

export default SummaryStats;
