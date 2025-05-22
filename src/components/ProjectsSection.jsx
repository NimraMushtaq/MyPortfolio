import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Calculator App",
    description: "A sleek and responsive calculator built with React.",
    image: "/projects/calc.png",
    tags: ["Html", "CSS", "React"],
    demoUrl: "https://nimramushtaq.github.io/MyCalculatorApp/",
    githubUrl: "https://github.com/NimraMushtaq/MyCalculatorApp",
  },
  {
    id: 2,
    title: "Character Counter",
    description:
      "A simple character counter with a 500-character limit.",
    image: "/projects/charCounter.png",
    tags: ["Html", "CSS", "Javascript"],
    demoUrl: "https://nimramushtaq.github.io/Character-Counter/",
    githubUrl: "https://github.com/NimraMushtaq/Character-Counter",
  },
  {
    id: 3,
    title: "Digital Clock",
    description:
      "A digital clock displaying accurate time with smooth JavaScript functionality.",
    image: "/projects/digitalClock.png",
    tags: ["Html", "CSS", "Javascript"],
    demoUrl: "https://nimramushtaq.github.io/Digital-Clock/",
    githubUrl: "https://github.com/NimraMushtaq/Digital-Clock",
  },
  {
    id: 4,
    title: "Tell me a Joke",
    description:
      "A fun app delivering random jokes to brighten your day using JavaScript.",
    image: "/projects/jokes.png",
    tags: ["Html", "CSS", "Javascript"],
    demoUrl: "https://nimramushtaq.github.io/Tell-me-a-joke/",
    githubUrl: "https://github.com/NimraMushtaq/Tell-me-a-joke",
  },
  {
    id: 5,
    title: "Multiplication Quiz",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/multipQuiz.png",
    tags: ["Html", "CSS", "Javascript"],
    demoUrl: "https://nimramushtaq.github.io/Multiplication-Quiz/",
    githubUrl: "https://github.com/NimraMushtaq/Multiplication-Quiz",
  },
  {
    id: 6,
    title: "Random Quotes",
    description:
      "A refreshing app that serves inspiring random quotes with every click.",
    image: "/projects/pic-rq.png",
    tags: ["Html", "CSS", "Javascript"],
    demoUrl: "https://nimramushtaq.github.io/RandomQuotes/",
    githubUrl: "https://github.com/NimraMushtaq/RandomQuotes",
  },
  {
    id: 7,
    title: "Weather App",
    description:
      "A clean, user-friendly weather app powered by WeatherAPI for instant forecasts.",
    image: "/projects/weather.png",
    tags: ["Html", "CSS", "Javascript"],
    demoUrl: "https://nimramushtaq.github.io/weather-app/",
    githubUrl: "https://github.com/NimraMushtaq/weather-app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/NimraMushtaq"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};