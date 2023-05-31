import { Factory, Model, createServer } from "miragejs";
import { faker } from "@faker-js/faker";

type Project = {
  project: string;
  nameDeveloper: string;
  startDate: string;
  deliveryDate: string;
  languageUsed: string;
  projectStatus: string;
};

type LanguageUsed = "Node" | "React";
type ProjectStatus = "finalizado" | "desenvolvimento";

export function makeServer() {
  const server = createServer({
    models: {
      project: Model.extend<Partial<Project>>({}),
    },

    factories: {
      project: Factory.extend({
        project(i: number) {
          return `Projeto-${i + 1}`;
        },
        nameDeveloper(i: number) {
          return `Developer-${i + 1}`;
        },
        startDate() {
          return faker.date.recent(10);
        },
        deliveryDate() {
          return faker.date.recent(10);
        },
        languageUsed() {
          return faker.helpers.arrayElement<LanguageUsed>(["Node", "React"]);
        },
        projectStatus() {
          return faker.helpers.arrayElement<ProjectStatus>([
            "desenvolvimento",
            "finalizado",
          ]);
        },
      }),
    },

    seeds(server) {
      server.createList("project", 10);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/projects");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
