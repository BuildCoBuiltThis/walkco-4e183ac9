import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WalkCo",
  description: "Here is the prompt to enter into the BuildCo conversational interview:

When it asks for your idea say:
\"I want to build a dog walking app called Wal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}