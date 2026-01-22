import { DM_Sans, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./assets/css/tailwind.css";
import WhatsappButton from "./components/whatsapp-button";

const dm_sans = DM_Sans({
    subsets: ["latin"],
    variable: '--font-dm-sans',
});

const dancing_script = Dancing_Script({
    subsets: ["latin"],
    variable: '--font-dancing_script',
});

export const metadata = {
  title: "Rukmana Bali Tour",
  description: "Make Your Holiday Easier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body className={`${dm_sans.variable} ${dancing_script.variable}  bg-white dark:bg-slate-900`}>
        
        {children}

        <WhatsappButton />

      </body>
    </html>
  );
}
