import React from "react";
import { Layout, Card } from "../../components";

function ProjectsPage(props) {
  const projects = [
    {
      title: "U.S. Medical Insurance Costs",
      subtitle: "Analysis of the medical insurance costs in the United States.",
      url: "https://github.com/D3vss/U.S.-Medical-Insurance-Costs",
      media:
        "https://cdn.discordapp.com/attachments/903756499833221163/1038251512431902760/us.png",
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
        "https://cdn.discordapp.com/attachments/903756499833221163/1038251511962157077/sanadcard.png",
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
        "https://cdn.discordapp.com/attachments/903756499833221163/1038251512960405584/wp.png",
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
        "https://cdn.discordapp.com/attachments/903756499833221163/1038251476465762365/On_going_Project.png",
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
        "https://cdn.discordapp.com/attachments/903756499833221163/1038251476092465183/On_going_Project_1.png",
      type: {
        label: "mobile",
        color: "bg-yellow-500",
      },
      onGoing: false,
    },
  ];

  return (
    <Layout className={"min-h-screen"} title={"Projects"}>
      <div className="flex flex-col w-full py-20 bg-black ">
        <div>
          <p className="text-4xl font-bold">Projects:</p>
          <div className="h-1 bg-blue-700 max-w-xs my-2" />
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
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
