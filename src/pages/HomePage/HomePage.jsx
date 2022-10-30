import React from "react";

import { Layout } from "../../components";

function HomePage(props) {
  return (
    <Layout>
      <div className="flex flex-row justify-evenly">
        <div className="bg-red-500 w-full h-screen">sec1</div>
        <div className="bg-blue-500 w-full h-screen">sec2</div>
      </div>
    </Layout>
  );
}

export default HomePage;
