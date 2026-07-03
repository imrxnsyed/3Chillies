import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Toaster from "@/components/Toaster";

// Shared chrome for all customer-facing pages (home, menu, about, …).
// The /admin route lives outside this group, so it doesn't get this nav/footer.
export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <CartDrawer />
      <Toaster />
    </>
  );
}
