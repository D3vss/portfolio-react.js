import React from "react";

import { Layout } from "../../components";

function HomePage(props) {
  return (
    <Layout>
      <div className="flex flex-row justify-evenly h-full">
        <div className="bg-red-500 w-full ">sec1</div>
        <div className="bg-blue-500 w-full ">sec2</div>
      </div>
    </Layout>
  );
}

export default HomePage;
