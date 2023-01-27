import { fetchData } from "../interface/api";
import { Data } from "../interface/model";
import React, { useState, useEffect } from "react";

interface Props {}

const Api: React.FC<Props> = () => {
  const [state, setState] = useState<Data[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData();
      setState(data);
    };
    fetch();
  }, []);
  console.log(state);
  return <div>여기는 하하하</div>;
};

export default Api;
