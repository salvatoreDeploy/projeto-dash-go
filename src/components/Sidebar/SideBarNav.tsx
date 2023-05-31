import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/project">
          Projetos
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÂO">
        <NavLink icon={RiInputMethodLine} href="/project/create">
          Formularios
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/automatation">
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  );
}
