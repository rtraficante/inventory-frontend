import { useAuth0 } from "@auth0/auth0-react";
import React, { FormEvent, useState } from "react";
import Navbar from "../components/nav/Navbar";

type Props = {};

const Dashboard = (props: Props) => {
  const [companyName, setCompanyName] = useState("");
  const { user } = useAuth0();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!user?.email) {
      return;
    }

    fetch("http://localhost:1337/api/company/", {
      method: "post",
      body: JSON.stringify({
        name: companyName,
      }),
      headers: {
        "Content-Type": "application/json",
        email: user.email,
      },
    }).then((res) => res.json());
  };

  return (
    <>
      <Navbar />
      <div>
        <h2>Create a company</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
