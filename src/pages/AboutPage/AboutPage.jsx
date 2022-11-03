import React from "react";

import { Layout } from "../../components";
import { Chrono } from "react-chrono";
import me from "../../assets/me2.png";
function AboutPage(props) {
  return (
    <Layout>
      <div className="container flex flex-col w-full py-20">
        <div>
          <p className="text-4xl font-bold">About me:</p>
          <div className="h-1 bg-blue-700 max-w-xs mt-2" />
        </div>
        <section className="container flex flex-row w-full justify-between items-center">
          <p className="w-2/3">
            A final year computer science engineering student at ENSIAS
            engineering school (The National School Of Computer Science) in
            Morocco, majoring in Web and Mobile Computing Engineering - Web
            Intelligence option. <br />I am a code and data enthusiast, and a
            self-taught graphic designer. I have been Freelancing graphic design
            at{" "}
            <a
              href="https://www.legiit.com/Designit"
              className="text-blue-500 font-bold"
            >
              Legiit
            </a>{" "}
            and have had quite a sucess doing so. <br />
            I am always looking for new challenges and projects to work on. I
            have been in love with computer science ever since i was little, and
            that was one of the reasons i am persuing it as a career now. <br />
            I am a very social person, always looking to expand my network,
            discover new things, and live adventures.
          </p>
          <div className="w-52 h-52 rounded-sm ring overflow-hidden">
            <img src={me} width={300} />
          </div>
        </section>

        {/* section 2 */}

        {/* <div className="max-w-xs">
          <p className="text-4xl font-bold">About me:</p>
          <div className="h-1 bg-blue-700" />
        </div> */}
        <section className="container flex flex-row w-full justify-center mt-auto items-center">
          <p className="text-gray-700">More content soon ;)</p>
        </section>
      </div>
    </Layout>
  );
}

export default AboutPage;
