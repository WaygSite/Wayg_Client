import axios from "axios";

interface Data {
  학교: string;
  설립구분: string;
  고교유형: string;
  남녀공학구분: string;
  학교도로명주소: string;
  학교전화번호: string;
  설립일자: number;
}

export const fetchData = async (): Promise<Data[]> => {
  const response = await axios.get("http://localhost:3000/data");
  return response.data.data;
};
