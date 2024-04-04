import { cn } from "@/lib";
import type { ContainerProps } from "@/components/ui";
import { Container } from "@/components/ui";

export const HeaderContainer = ({ children, className }: ContainerProps) => {
  return (
    <Container
      className={cn(
        "stick top-0 z-10 flex h-16 w-full items-center border-b border-gray-100/60 backdrop-blur dark:border-dark-200",
        className
      )}
    >
      {children}
    </Container>
  );
};
