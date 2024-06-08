// src/components/ActivityTable.tsx
import React from 'react';

interface Activity {
  day: string;
  commits: number;
  pullRequests: number;
  merges: number;
  meetings: number;
  documentation: number;
}

interface ActivityTableProps {
  data: Activity[];
}

const ActivityTable: React.FC<ActivityTableProps> = ({ data }) => {
  return (
    <div>
      <h2>Activity Table</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Commits</th>
            <th>Pull Requests</th>
            <th>Merges</th>
            <th>Meetings</th>
            <th>Documentation</th>
          </tr>
        </thead>
        <tbody>
          {data.map(activity => (
            <tr key={activity.day}>
              <td>{activity.day}</td>
              <td>{activity.commits}</td>
              <td>{activity.pullRequests}</td>
              <td>{activity.merges}</td>
              <td>{activity.meetings}</td>
              <td>{activity.documentation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
