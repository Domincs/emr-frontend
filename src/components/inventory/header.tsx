import { DasboardIcon } from "@/components/icons";
import { HeaderContainer } from "@/components/shared";
import { BreadCrumbs } from "@/components/ui";

export const Header = () => {
  return (
    <HeaderContainer className="justify-between border-0">
      <BreadCrumbs
        breadCrumbs={[
          {
            name: "Inventory",
            url: "/",
            icon: <DasboardIcon className="h-[1.15rem] w-auto" />,
          },
        ]}
      />
    </HeaderContainer>
  );
};
