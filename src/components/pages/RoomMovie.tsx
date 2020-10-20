import React from "react";
import { useParams } from "react-router-dom";
import { RoomMovieLayout } from "../templates/RoomMovieLayout";

export const RoomMovie: React.FC = () => {
  const { id } = useParams();
  console.log(id);

  return <RoomMovieLayout />;
};
