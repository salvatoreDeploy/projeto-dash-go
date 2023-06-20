import { useQuery } from "react-query";
import { api } from "../api";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

type Project = {
  id: string,
  project: string,
  nameDeveloper: string;
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
      nameDeveloper: project.nameDeveloper,
      languageUsed: capitalizeFirstLetter(project.languageUsed),
      startDate: new Date(project.startDate).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: 'UTC'
      }),
      deliveryDate: new Date(project.deliveryDate).toLocaleDateString(
        "pt-BR",
        { day: "2-digit", month: "long", year: "numeric", timeZone: 'UTC' }
      ),
      projectStatus: capitalizeFirstLetter(project.projectStatus)
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