import axios from "axios";
import { Data } from "./model";

export const fetchData = async (): Promise<Data[]> => {
  const response = await axios.get("http://localhost:3001/api/schoolinfo");
  return response.data;
};
