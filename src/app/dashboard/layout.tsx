import { AppSidebar } from '@/components/app-sidebar';
import { Header } from '@/components/header';
import { Sidebar, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
        <Header />
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
