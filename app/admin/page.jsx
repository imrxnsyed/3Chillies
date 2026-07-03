import AdminApp from "@/components/admin/AdminApp";

// Hidden CRM route — not linked anywhere in the public site.
// Reachable only by navigating to /admin, then behind a login gate.
export const metadata = {
  title: "3 Chillies — Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminApp />;
}
