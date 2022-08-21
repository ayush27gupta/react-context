import React from "react";
import { useContext, useState } from "react";
import { StudentContext } from "../context/data";
export default function () {
  const [data, setData] = useContext(StudentContext);
  return <div>{data.name}</div>;
}


