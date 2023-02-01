import axios from "axios";
import { Data } from "./model";

export const fetchData = async (): Promise<Data[]> => {
  const response = await axios.get(
    "https://port-0-wayg-server-sop272gldlqcwd1.gksl2.cloudtype.app/"
  );
  return response.data.data;
};
