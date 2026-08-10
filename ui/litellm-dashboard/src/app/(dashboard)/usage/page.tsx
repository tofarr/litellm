"use client";

import NewUsagePage from "./_components/components/UsagePageView";
import useAuthorized from "@/app/(dashboard)/hooks/useAuthorized";
import { useAllTeams } from "@/app/(dashboard)/hooks/teams/useTeams";
import { useOrganizations } from "@/app/(dashboard)/hooks/organizations/useOrganizations";

export default function UsagePage() {
  useAuthorized();
  const { data: teams } = useAllTeams();
  const { data: organizations } = useOrganizations();
  return <NewUsagePage teams={teams ?? []} organizations={organizations ?? []} />;
}
