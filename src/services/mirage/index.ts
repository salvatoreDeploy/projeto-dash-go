import { Model, createServer } from "miragejs";

type User = {
  name: string;
  email: string;
  password: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      users: Model.extend<Partial<User>>({}),
    },
    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
