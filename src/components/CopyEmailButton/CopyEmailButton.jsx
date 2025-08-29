import { Copy } from "lucide-react";
import { useState } from "react";

export const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "issaczwl@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    });
  };
  return (
    <button
      onClick={copyToClipboard}
      className="relative px-1 py-4 text-sm text-center rounded-full font-bold bg-black w-[12rem] cursor-pointer overflow-hidden"
    >
      <p className="flex items-center justify-center text-white gap-2">
        <Copy />
        Copy Email Address
      </p>
    </button>
  );
};
