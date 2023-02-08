import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

type Props = {};

const CompanyDashboard = (props: any) => {
  const serverUrl = import.meta.env.VITE_API_SERVER_URL;
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["companies"],
    queryFn: () => {
      return axios.get(`${serverUrl}/api/company/${id}`);
    },
  });
  console.log(data);

  return (
    <>
      <Navbar />
      <div className="grid sm:grid-cols-2 sm:grid-rows-3 md:grid-rows-2 md:grid-cols-3 p-6 pt-12 gap-4">
        <div className="relative flex flex-col border-2 rounded p-2 min-h-[175px]">
          <h5 className="font-bold text-center">Revenue</h5>
          <h1 className="font-bold text-xl text-center my-auto">$1000.00</h1>
          <select className="absolute bottom-2 right-2 border-2 p-1 rounded">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
        <div className="border-2 rounded p-2 min-h-[175px]">
          <h5 className="font-bold text-center">
            Low Inventory - Needs Attention
          </h5>
          <ul className="style-none">
            <li>Rocket League</li>
            <li>Counter-strike Global Offensive</li>
            <li>Apex Legends</li>
            <li>Call of Duty</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CompanyDashboard;
