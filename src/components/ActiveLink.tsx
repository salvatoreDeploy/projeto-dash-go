import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { Children, ReactElement, ReactNode, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({ children, ...props }: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (asPath === props.href || asPath === props.as) {
    isActive = true;
  }

  return (
    <Link {...props}>
      {cloneElement(children, { color: isActive ? "pink.400" : "gray.50" })}
    </Link>
  );
}
