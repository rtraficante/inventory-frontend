import { useAuth0 } from "@auth0/auth0-react";
import React, { FormEvent, useState } from "react";
import Navbar from "../components/nav/Navbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CreateCompany from "../components/createCompany/CreateCompany";

type Company = {
  name: string | undefined;
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

  if (!data?.data) {
    return <CreateCompany user={user} />;
  }

  return (
    <>
      <Navbar />
      <div></div>
    </>
  );
};

export default Dashboard;
