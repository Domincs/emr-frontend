"use client";
import { Button, Container, Flex, Tabs } from "@/components/ui";
import { EditIcon } from "@/components/icons";
import { BodyContainer } from "@/components/shared";
// import { InfoPanel, InfoPanelRecord } from "@/components/info-panel";
import { Header } from "./header";
import { Intro } from "./intro";
import { User } from "@/types";

export const DisplayUserDetails = ({
  user,
}: {
  user?: User;
}) => {
  // const details: InfoPanelRecord[] = [
  //   {
  //     title: "Id",
  //     value: "123",
  //     type: "text",
  //   },
  //   {
  //     title: "Quantity",
  //     value: "123",
  //     type: "text",
  //   },
  // ];

  return (
    <>
      <Header />
      <BodyContainer>
        <Container>
          <Intro />
          <Tabs defaultValue="details">
            <Flex justify="between" align="center" className="mb-3">
              <Tabs.List className="mx-0">
                <Tabs.Tab value="details">Details</Tabs.Tab>
              </Tabs.List>
              <Flex gap={2}>
                <Button
                  color="tertiary"
                  variant="outline"
                  leftIcon={<EditIcon className="h-4 w-auto" />}
                  size="sm"
                >
                  Edit user
                </Button>
              </Flex>
            </Flex>
            {/* <Tabs.Panel value="details">
              <InfoPanel details={details} />
            </Tabs.Panel> */}
          </Tabs>
        </Container>
      </BodyContainer>
    </>
  );
};
