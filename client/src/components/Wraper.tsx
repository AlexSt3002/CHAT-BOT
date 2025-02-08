import React from "react";
import { Container } from "react-bootstrap";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <Container
      fluid
      className="d-flex flex-column min-vw-100 min-vh-100 justify-content-around align-items-center p-0 m-0"
    >
      {children}
    </Container>
  );
};

export default Wrapper;
