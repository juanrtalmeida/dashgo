import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { ReactNode, useContext, useEffect } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";

interface SideBarContextProps {
  children: ReactNode;
}

type SideBarContextData = UseDisclosureReturn;

const SideBarContext = createContext({} as SideBarContextData);

export function SideBarContextProvider({ children }: SideBarContextProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose;
  }, [router.asPath]);

  return (
    <SideBarContext.Provider value={disclosure}>
      {children}
    </SideBarContext.Provider>
  );
}

export const useSideBarContext = () => useContext(SideBarContext);
