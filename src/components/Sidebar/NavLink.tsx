import {
  Icon,
  Link,
  Text,
  LinkProps as ChackraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavLinkProps extends ChackraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ children, icon, ...props }: NavLinkProps) {
  return (
    <Link display="flex" textAlign="center" {...props}>
      <Icon as={icon} fontSize="20"></Icon>
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
