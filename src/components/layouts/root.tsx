"use client";

import { Sidebar } from "../shared";
import { ResizablePanel } from "../ui";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResizablePanel autoSaveId="main:layout" direction="horizontal">
      <ResizablePanel.Panel defaultSize={17} maxSize={20} minSize={15}>
        <Sidebar />
      </ResizablePanel.Panel>
      <ResizablePanel.Handle />
      <ResizablePanel.Panel defaultSize={83}>{children}</ResizablePanel.Panel>
    </ResizablePanel>
  );
};
