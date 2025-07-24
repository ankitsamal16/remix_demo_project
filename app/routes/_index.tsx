import type { MetaFunction } from "@remix-run/node";
import Sidebar from "~/components/Sidebar";
import ChatMain from "~/components/ChatMain";
import ChatInput from "~/components/ChatInput";

export const meta: MetaFunction = () => {
  return [
    { title: "New Project" },
    { name: "description", content: "Welcome to Demo Project" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      <Sidebar />
      <main className="flex flex-col flex-1 items-center justify-center">
        <ChatMain />
        <ChatInput />
      </main>
    </div>
  );
}