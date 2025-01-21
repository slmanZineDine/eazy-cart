export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex-between mx-auto max-w-8xl">{children}</main>;
}
