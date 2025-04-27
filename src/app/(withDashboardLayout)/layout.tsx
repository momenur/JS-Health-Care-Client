"use client";

import { useEffect, useState } from "react";
import DashboardDrawer from "@/components/dashboard/dashboard_drawer/DashboardDrawer";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    } else {
      setAuthChecked(true);
    }
  }, [router]);

  if (!authChecked) {
    // You can show a loading spinner while checking
    return <div>Unauthorize user</div>;
  }

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
