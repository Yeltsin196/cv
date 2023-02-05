import { Layout } from "@/components/layout";
import React from "react";
import { HomeComponent } from "../components/Home";

const Home = () => {
  return (
    <Layout header footer>
      <HomeComponent></HomeComponent>
    </Layout>
  );
};

export default Home;
