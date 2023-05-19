import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Projetos</NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÂO">
        <NavLink icon={RiInputMethodLine}>Formularios</NavLink>
        <NavLink icon={RiGitMergeLine}>Automação</NavLink>
      </NavSection>
    </Stack>
  );
}
