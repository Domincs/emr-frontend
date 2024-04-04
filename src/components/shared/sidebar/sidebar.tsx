"use client";
import { Box, Text, Badge, Flex } from "@/components/ui";
import { Header } from "./header";
import { Navigation } from "./navigation";

export const Sidebar = () => {
  return (
    <Box className="h-screen border-r border-gray-100/60 px-4 dark:border-dark-200 flex flex-col justify-between pb-4">
      <Box>
        <Header />
        <Navigation />
      </Box>
      <Box>
        <Text fontSize="sm" className="my-3 relative -left-px" color="muted">
          © 2024 • All Rights Reserved.
        </Text>
        <Flex justify="between" align="center">
          <Text fontWeight="semibold" transform="uppercase" fontSize="sm">
            Environment
          </Text>
          <Badge color="warning">Dev</Badge>
        </Flex>
      </Box>
    </Box>
  );
};
