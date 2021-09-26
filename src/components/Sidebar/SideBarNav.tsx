import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { Navlink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <Navlink icon={RiDashboardLine} href="/dashbord">
          DashBoard
        </Navlink>
        <Navlink icon={RiContactsLine} href="/users">
          Usuários
        </Navlink>
      </NavSection>
      <NavSection title="Automação">
        <Navlink icon={RiInputMethodLine} href="/forms">
          Formulário
        </Navlink>
        <Navlink icon={RiGitMergeLine} href="/automation">
          Automação
        </Navlink>
      </NavSection>
    </Stack>
  );
}
