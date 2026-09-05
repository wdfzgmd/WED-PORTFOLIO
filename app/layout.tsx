import "./globals.css";

export const metadata = {
  title: "Wed Alghamdi | Portfolio",
  description: "Computer Engineering student at KFUPM — AI, Data Science, and Machine Learning projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FFF8EC] text-[#3b2a15]">{children}</body>
    </html>
  );
}