import React from "react";
import { homeObjFour } from "./Data";
import { InfoSection, Pricing } from "../../components";

const Home = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
