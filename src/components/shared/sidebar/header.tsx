"use client";

import { useState } from "react";
import { TbCheck } from "react-icons/tb";
import { Command, LogOut, Plus, Settings, User, UserPlus } from "lucide-react";
import { Flex, Button, Avatar, Menu, Text } from "@/components/ui";
import {
  ArrowDownIcon,
  FuneralIcon,
  NewIssueIcon,
  CrediLifeIcon,
} from "@/components/icons";
import { signOut } from "next-auth/react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Flex align="center" className="h-16" justify="between">
        <Button
          className="pl-1 font-medium"
          color="tertiary"
          leftIcon={<Avatar name="Inventory" rounded="md" size="sm" />}
          size="sm"
          variant="naked"
        >
          Inventory
        </Button>

        <Menu>
          <Menu.Button>
            <Button
              className="px-1"
              color="tertiary"
              leftIcon={<Avatar size="sm" />}
              size="sm"
              variant="naked"
            ></Button>
          </Menu.Button>
          <Menu.Items align="end">
            <Menu.Group className="mb-3 mt-1 px-4">
              <Text>superadmin@example.com</Text>
            </Menu.Group>
            <Menu.Separator />
            <Menu.Group>
              <Menu.Item
                onClick={() => {
                  signOut();
                }}
              >
                <LogOut className="h-5 w-auto" />
                Log out
              </Menu.Item>
            </Menu.Group>
          </Menu.Items>
        </Menu>
      </Flex>
    </>
  );
};
