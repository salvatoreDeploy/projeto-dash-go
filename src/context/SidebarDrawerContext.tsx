/* eslint-disable react-hooks/exhaustive-deps */
import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactNode, createContext, useContext, useEffect } from "react";

interface SideBarDrawerProviderProps {
  children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SideBarDrawerProvider({
  children,
}: SideBarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext);
