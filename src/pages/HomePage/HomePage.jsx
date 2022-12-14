import React from "react";

import { Layout, Button } from "../../components";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import vect1 from "../../assets/vect1.png";
import vect2 from "../../assets/vect2.png";
import vect3 from "../../assets/vect3.png";

function HomePage(props) {
  return (
    <Layout className={"h-screen"} title={"Home"}>
      <div className="flex flex-row justify-evenly max-h-full min-h-full">
        <section className="w-full flex flex-col justify-center">
          <div className="mt-auto">
            <p className="text-5xl font-bold mb-5">
              Hi! <br /> I am Oudoun Mohamed.
            </p>
            <p className="text-base font-normal mb-10">
              A Web and Mobile Developer, and a Data enthusiast.
            </p>
            <div className="flex flex-row gap-2 w-full">
              <Button label={"Hire Me!"} variant="filled" />
              <Button
                label={"Projects"}
                icon={<BsBoxArrowInUpRight className="ml-2" />}
                variant="outlined"
              />
            </div>
          </div>
          <div className="mt-auto">
            <p>
              Check out my profile at{" "}
              <a
                href="https://legiit.com/Designit"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-500"
              >
                Legiit
              </a>
            </p>
            <p>
              Check out my badges at{" "}
              <a
                href="https://www.credly.com/users/mohamed-oudoun/badges"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-orange-500"
              >
                Credly
              </a>
            </p>
          </div>

          <footer className="flex flex-col items-center mt-auto container bg-gray-900">
            <div className="container px-20 mx-auto h-1 bg-blue-700 mb-5" />
            <p className="text-lg text-gray-200 mt-auto">Find me on:</p>
            <div className="flex flex-row w-1/4 justify-center">
              <a
                href="https://github.com/D3vss"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaGithubSquare className="text-gray-200 text-4xl" />
              </a>
              <a
                href="https://twitter.com/mohamedoudoun"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaTwitterSquare className="text-gray-200 text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/oudoun-mohamed/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaLinkedin className="text-gray-200 text-4xl" />
              </a>
            </div>

            <p className="mt-auto text-sm text-gray-600/[.6] mb-5">
              ?? 2022 <a href="www.github.com/d3vss">D3vss</a> - Created by
              Oudoun Mohamed
            </p>
          </footer>
        </section>
        <section className="bg-bg3 bg-center bg-contain bg-no-repeat w-full lg:flex flex-col justify-center items-center lg:visible hidden">
          <div className="flex flex-col w-full px-20 py-20">
            <img src={vect1} width={150} className="self-end" alt="vector" />
            <img src={vect2} width={70} alt="vector" />
            <img src={vect3} width={110} className="self-end" alt="vector" />
          </div>
          <Button label={"Let's get in touch!"} variant="filled" />
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
