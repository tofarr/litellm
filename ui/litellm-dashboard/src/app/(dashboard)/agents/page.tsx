"use client";

import AgentsPanel from "./_components/AgentsPanel";
import useAuthorized from "@/app/(dashboard)/hooks/useAuthorized";

export default function Agents() {
  const { accessToken, userRole } = useAuthorized();
  return <AgentsPanel accessToken={accessToken} userRole={userRole} />;
}
