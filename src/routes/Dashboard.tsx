import { useAuth0 } from "@auth0/auth0-react";
import React, { FormEvent, useState } from "react";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CreateCompany from "../components/CreateCompany";
import { Link } from "react-router-dom";

type Company = {
  id: number;
  name: string | undefined;
  createdAt: Date;
  updatedAt: Date;
};

type Props = {};

const Dashboard = (props: Props) => {
  const serverUrl = import.meta.env.VITE_API_SERVER_URL;
  const { user } = useAuth0();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["companies"],
    queryFn: () => {
      return axios.get(`${serverUrl}/api/company`);
    },
  });
  console.log(data);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  if (!data?.data) {
    return <CreateCompany user={user} />;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-[1020px] mx-auto mt-8">
        <h2>Companies</h2>
        <div className="mt-2 space-y-2 flex flex-col">
          {data.data.map((company: Company) => (
            <Link
              to={`/dashboard/${company.id}`}
              key={company.id}
              className="rounded w-full bg-white border p-2 cursor-pointer shadow-sm"
            >
              {company.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
