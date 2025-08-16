import { cookies } from "next/headers";
import { auth } from "~/auth";
import { redirect } from "next/navigation";
import UnauthorizedScreen from "@/components/unauthorised";
import ClientDashboardPage from "@/components/dashboard/client-page";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

async function getGuild(id: string) {
  const res = await fetch(`${process.env.SITE}/api/guild/${id}`, {
    headers: {
      Cookie: cookies().toString(),
    },
    cache: "no-store",
  });

  if (res.status === 403) throw new Error("unauthorized");

  const data = await res.json();
  if (data.mutualGuilds?.length === 0) throw new Error("unauthorized");

  return JSON.parse(JSON.stringify(data));
}


async function getConfig(id: string) {
  const res = await fetch(`${process.env.SITE}/api/config/${id}`, {
    headers: {
      Cookie: cookies().toString(),
    },
    cache: "no-store",
  });

  if (res.status === 403) throw new Error("unauthorized");

  const data = await res.json();
  return JSON.parse(JSON.stringify(data));
}

export default async function Page({
  params,
}: {
  params: {
    id: string;
    page: string;
  };
}) {
  const session = await auth();
  if (!session) redirect("/");

  try {
    const guildData = await getGuild(params.id);
    const configData = await getConfig(params.id);
    const guild = guildData.mutualGuilds?.[0] ?? null;
    const config = configData.mutualData?.config ?? null;
    return (
      <SidebarProvider
        style={
          {
            "--sidebar-width": "19rem",
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{params.page}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="px-4 lg:px-6 space-y-6">
                  <ClientDashboardPage
                    page={params.page}
                    guildData={guild}
                    configData={config}
                  />
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    );
  } catch {
    return <UnauthorizedScreen />;
  }
}
