import React from "react";
import { SwiperInfo, WeHelping } from "./Information";
import { MainContainerHome } from "./MainContainerHome";

export const HomeComponent = () => {
  return (
    <div>
      <MainContainerHome></MainContainerHome>
      <SwiperInfo></SwiperInfo>
      <WeHelping></WeHelping>
    </div>
  );
};
