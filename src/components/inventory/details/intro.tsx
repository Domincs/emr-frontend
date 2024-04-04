import { Box, Flex, Text } from "@/components/ui";

export const Intro = () => {
  return (
    <Flex className="mb-3 mt-1" justify="between" align="end">
      <Box>
        <Text as="h2" fontSize="3xl" fontWeight="medium" className="mb-1">
          Item Details
        </Text>
        <Text color="muted">Inventory information.</Text>
      </Box>
    </Flex>
  );
};
