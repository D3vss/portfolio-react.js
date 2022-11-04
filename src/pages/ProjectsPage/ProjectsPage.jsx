import React from "react";
import { Layout, Card } from "../../components";

function ProjectsPage(props) {
  const projects = [
    {
      title: "U.S. Medical Insurance Costs",
      subtitle: "Analysis of the medical insurance costs in the United States.",
      url: "https://github.com/D3vss/U.S.-Medical-Insurance-Costs",
      media:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6nM2AdxxNW-os1OxzEir4ojHrIozzcyUCTh5h5HgN1zLk0Zj8uAPIKH8m41Airt_j_YOhmAjYb48J0wzVD0yw65t7k_dFCXuJvaDFaABzSMJFL1hw8l28pPncsn3sWlWQhDpj3eCKQ4BVFxtVVcZny1nV5V4oF97ReQ21YOQW3wUcyqljy3WwRqAS6g/w719-h396/us.png",
      type: {
        label: "data",
        color: "bg-red-500",
      },
      onGoing: false,
    },
    {
      title: "Sanad Card",
      subtitle: "A modern web app that acts as a digital business card.",
      url: "https://github.com/RedRosh/sanad-card",
      media:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6GCuuvy_lhiwDRmq36Ta4OEcUtXsYiOa0k5_IMhzjcHYTi7Kaynk_IrjwpVkrfjFO1TqyiNvcX8OoPR4sxQgs7UvJEwDcTuFAsPVsnR0vlAaphxkeAHuOVat3rOwMvw3jElOQNvWAaWMQ9doCb6TlFWrEyK0B8CRdd61eAaR8vjgtDlC0Ipb9trvd4g/s1920/sanadcard.png",
      type: {
        label: "web",
        color: "bg-green-500",
      },
      onGoing: false,
    },
    {
      title: "Weather App",
      subtitle:
        "A simple web app that uses OpenWeather API to preview weather.",
      url: "https://github.com/D3vss/Weather-app",
      media:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPJmQx_xoOiiBfcWnDVk1OqOoj6YriFz71j_zDPb6CY4ErnTnXaofF5f3SY5niOJaYG2y3AY2kvoiCQYY-vTG65pdEBMS9DAxyGLbe3diYeu_defG8YlXlttwuIPGnuC7YCd_OKopZ5wuwYO7mkhuY9bISs82Cr0Ie6Yip_o7_HRs0tVxrDkbKXqXKLw/w777-h355/wp.png",
      type: {
        label: "web",
        color: "bg-green-500",
      },
      onGoing: false,
    },
    {
      title: "Showcase App",
      subtitle:
        "A platform to showcase your work and portfolio, and look for potential jobs.",
      url: "https://github.com/D3vss/showcase-app",
      media:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgADimkHJttsc-ZR1Y0nBe2YMuhSZwXnHY_41n_EgjNWZpiklt1uRbAkoalV0fGnu8svkGBhEu6uBzOe-gVr8kucOad8eFX_bsEYAcebeT7hKToBpXiuoVN9dlnhS0F-TBl6Ng3LX4ezcw6lmI69N3GaWSiYb_BgZJf0K9Po9Fcskjea5olp3Wtj9SzAg/s720/On%20going%20Project.png",
      type: {
        label: "web",
        color: "bg-green-500",
      },
      onGoing: true,
    },
    {
      title: "Chakir App",
      subtitle:
        "A fraud detection solution to prevent forgery of technical visit papers of vehicules in Morocoo.",
      url: "https://github.com/D3vss/Chakir-App",
      media:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfSms9FBwGqI-2BiH3zyw947n0AwwwXmzTEy8hAv2fKaIPlIO1zSp21W326ybFDPErI4zhwS6aZnn6o8irB9lTD-iYbbDSBlaZZ0GMjoOOkfaPRLaQrbRGVpV4Kh5963R0ogNygSKhrGdIR3yKgGWlAgHdbhxpUxToqU3E44xxmUktm50XQzN1SrrPMg/w716-h398/On%20going%20Project%20(1).png",
      type: {
        label: "mobile",
        color: "bg-yellow-500",
      },
      onGoing: false,
    },
  ];

  return (
    <Layout>
      <div className="container flex flex-col w-full py-20 bg-black">
        <div>
          <p className="text-4xl font-bold">Projects:</p>
          <div className="h-1 bg-blue-700 max-w-xs my-2 " />
        </div>
        <section className="container grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              media={project.media}
              subtilte={project.subtitle}
              url={project.url}
              type={project.type}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default ProjectsPage;
