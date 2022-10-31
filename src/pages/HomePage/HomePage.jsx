import React from "react";

import { Layout, Button } from "../../components";

function HomePage(props) {
  return (
    <Layout>
      <div className="flex flex-row justify-evenly h-full">
        <section className="w-full  flex flex-col">
          <p className="text-5xl font-bold mb-5">
            Hi! <br /> I am Oudoun Mohamed.
          </p>
          <p className="text-base font-normal mb-10">
            A Web and Mobile Developer, and a Data enthusiast.
          </p>

          <div className="flex flex-row w-4/12 justify-between">
            <Button label={"Hire Me!"} variant="filled" />
            <Button label={"Projects"} variant="outlined" />
          </div>
          <footer className="mt-auto container bg-gray-700 h-1/4">
            <div className="container px-20 mx-auto h-1 bg-blue-700" />
          </footer>
        </section>
        <section className="grayscale bg-me bg-center bg-contain bg-no-repeat w-full "></section>
      </div>
    </Layout>
  );
}

export default HomePage;
