import { Box, Text } from "@/components/ui";

export const Intro = () => {
  return (
    <Box className="mb-2">
      <Text as="h2" fontSize="3xl" fontWeight="medium" className="mb-1">
        Inventory
      </Text>
      <Text color="muted">List of all the items in the inventory.</Text>
    </Box>
  );
};
