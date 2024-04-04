import { Box, Button, Text } from "@/components/ui";
import { Bird, ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Box className="flex justify-center items-center h-screen">
      <Box className="flex flex-col items-center">
        <Bird strokeWidth={1} className="h-40 w-auto" />
        <Text fontSize="3xl" fontWeight="semibold" className="mb-2">
          Page Not Found
        </Text>
        <Text color="muted" className="mb-3">
          The page you are looking for does not exist.
        </Text>
        <Button
          href="/inventory"
          leftIcon={<ChevronLeft className="h-5 w-auto" />}
        >
          Back to inventory
        </Button>
      </Box>
    </Box>
  );
}
