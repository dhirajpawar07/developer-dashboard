// import axios from "axios";

// const API_URL = "http://localhost:5000/AuthorWorklog";

// export const fetchActivityData = async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// };
// src/api.ts
// src/api.ts
import { Activity } from "./types"; // Import the Activity type from the types file

export const fetchActivityData = async (): Promise<Activity[]> => {
  try {
    const response = await fetch("/db.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.activity as Activity[];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
