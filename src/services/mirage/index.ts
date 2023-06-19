import { Factory, Model, Response, createServer } from "miragejs";
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

      this.get("/projects", function (schema, request) {
        const { page = 1, per_page = 1 } = request.queryParams

        const total = schema.all('project').length

        const pageStart = (Number(page) - 1) * Number(per_page)
        const pageEnd = pageStart + Number(per_page)

        const projects = this.serialize(schema.all("project"))
          .projects.slice(pageStart, pageEnd)

        return new Response(200, { 'x-total-count': String(total) }, { projects })
      });

      this.get("projects/:id")

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
