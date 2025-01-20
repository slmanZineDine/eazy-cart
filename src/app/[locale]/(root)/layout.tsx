// My-Components
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-8xl">
      <Header />
      <main className="bg-background min700:pt-headerHeight">{children}</main>
      <Footer />
    </div>
  );
}
