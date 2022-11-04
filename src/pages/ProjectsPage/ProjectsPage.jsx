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
    },
  ];

  return (
    <Layout>
      <div className="container flex flex-col w-full py-20 bg-black">
        <div>
          <p className="text-4xl font-bold">Projects:</p>
          <div className="h-1 bg-blue-700 max-w-xs my-2 " />
        </div>
        <section className="container grid w-full justify-between items-center">
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
