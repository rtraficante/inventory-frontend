import { User } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { FormEvent, useState } from "react";

type Props = {
  user: User | undefined;
};

type Company = {
  name: string | undefined;
};

const CreateCompany = ({ user }: Props) => {
  const [companyName, setCompanyName] = useState<string>("");
  const serverUrl = import.meta.env.VITE_API_SERVER_URL;

  const mutation = useMutation({
    mutationFn: (newCompany: Company) => {
      return axios.post(`${serverUrl}/api/company`, newCompany, {
        headers: {
          userEmail: user?.email,
        },
      });
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!user?.email) {
      return;
    }

    mutation.mutate({ name: companyName });
  };
  return (
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
  );
};

export default CreateCompany;
