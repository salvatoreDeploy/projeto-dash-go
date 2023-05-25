import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChackraLinkProps,
} from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChackraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ children, icon, href, ...props }: NavLinkProps) {
  return (
    <ActiveLink href={href}>
      <ChakraLink display="flex" textAlign="center" {...props}>
        <Icon as={icon} fontSize="20"></Icon>
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
