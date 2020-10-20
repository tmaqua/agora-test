import React from "react";

export const Home: React.FC = () => {
  return <p>{process.env.APP_ENV}</p>;
};
