import { useQuery } from "react-query";
import { api } from "../api";

type ProjectParamsResponse = {
  id: string,
  project: string,
  languageUsed: string,
  startDate: string,
  deliveryDate: string,
  projectStatus: string
}


export async function getProjects(): Promise<ProjectParamsResponse[]> {
  const { data } = await api.get("projects");
  // const data = await response.json();

  const projects = data.projects.map((project) => {
    return {
      id: project.id,
      project: project.project,
      languageUsed: project.languageUsed,
      startDate: new Date(project.startDate).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      deliveryDate: new Date(project.deliveryDate).toLocaleDateString(
        "pt-BR",
        { day: "2-digit", month: "long", year: "numeric" }
      ),
      projectStatus: project.projectStatus,
    };
  });

  return projects;
}

export function useProject() {
  return useQuery(
    "projects", getProjects,
    // { staleTime: 1000 * 5 } // 5 segundos
  );
}