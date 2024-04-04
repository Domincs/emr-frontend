import { usePathname } from "next/navigation";
import { Flex, NavLink } from "@/components/ui";
import { cn } from "@/lib";
import { DasboardIcon, UsersIcon } from "@/components/icons";

export const Navigation = () => {
  const pathname = usePathname();
  const links = [
    {
      name: "Inventory",
      icon: <DasboardIcon className="h-[1.15rem] w-auto" />,
      href: "/inventory",
    },
    {
      name: "Users",
      icon: <UsersIcon className="h-5 w-auto" />,
      href: "/users",
    },
  ];

  return (
    <Flex direction="column" gap={2}>
      {links.map(({ name, icon, href }) => {
        return (
          <NavLink key={href} active={pathname.startsWith(href)} href={href}>
            <span
              className={cn(
                "text-gray-300/80 group-hover:text-gray-300 dark:text-gray dark:group-hover:text-gray-200",
                {
                  "text-gray-300 dark:text-gray-200": pathname.startsWith(href),
                }
              )}
            >
              {icon}
            </span>
            {name}
          </NavLink>
        );
      })}
    </Flex>
  );
};
