import React from "react";

import { Layout, Button } from "../../components";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import vect1 from "../../assets/vect1.png";
import vect2 from "../../assets/vect2.png";
import vect3 from "../../assets/vect3.png";

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
          <footer className="flex flex-col items-center mt-auto container bg-gray-900 h-1/4">
            <div className="container px-20 mx-auto h-1 bg-blue-700" />

            <p className="text-lg text-gray-200">Find me on:</p>
            <div className="flex flex-row w-1/4 justify-between">
              <FaGithubSquare className="text-gray-200 text-5xl" />
              <FaTwitterSquare className="text-gray-200 text-5xl" />
              <FaLinkedin className="text-gray-200 text-5xl" />
            </div>

            <p className="mt-auto text-sm text-gray-600/[.6]">
              © 2022 <a href="www.github.com/d3vss">D3vss</a> - Created by
              Oudoun Mohamed
            </p>
          </footer>
        </section>
        <section className="bg-bgFixed bg-cover bg-no-repeat w-full flex flex-col justify-center items-center">
          <div className="grayscale flex flex-col w-full px-20 py-20">
            <img src={vect1} width={100} className="self-end" />
            <img src={vect2} width={110} />
            <img src={vect3} width={90} className="self-end" />
          </div>
          <Button label={"Let's get in touch!"} variant="filled" />
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
