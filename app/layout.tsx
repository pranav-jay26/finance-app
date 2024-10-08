
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { 
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton
} from "@clerk/nextjs";

const inter = Inter({
  subsets: ['latin'],
  weights: ['100', '400', '700', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Clarity Finance",
  description: "Accounting made easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

