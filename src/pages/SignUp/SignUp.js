import React from "react";
import { homeObjThree } from "./Data";
import { InfoSection } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
