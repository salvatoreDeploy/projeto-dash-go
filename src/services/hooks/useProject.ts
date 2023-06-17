import { useQuery } from "react-query";
import { api } from "../api";

type Project = {
  id: string,
  project: string,
  languageUsed: string,
  startDate: string,
  deliveryDate: string,
  projectStatus: string
}

type ProjectParamsResponse = {
  totalCount: number
  projects: Project[]
}

export async function getProjects(page: number): Promise<ProjectParamsResponse> {
  const { data, headers } = await api.get("projects", {
    params: {
      page
    }
  });
  // const data = await response.json();

  const totalCount = Number(headers['x-total-count'])

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

  return {
    projects,
    totalCount
  }
}

export function useProject(page: number) {
  return useQuery(
    ["projects", page], () => getProjects(page),
    // { staleTime: 1000 * 5 } // 5 segundos
  );
}