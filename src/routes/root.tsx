import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const root = (props: Props) => {
  const { loginWithRedirect, user, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !isLoading) {
      navigate("/dashboard");
    }
  }, [user, isLoading]);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
        eveniet quam eos libero delectus, autem laborum ipsam obcaecati, eum
        repudiandae corporis expedita iusto doloribus dolores. Dolores
        cupiditate molestiae aperiam ad.
      </p>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
};

export default root;
