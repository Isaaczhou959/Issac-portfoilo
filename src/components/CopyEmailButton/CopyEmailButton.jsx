import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";

export const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "issaczwl@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, [2000]);
  };
  return (
    <button
      onClick={copyToClipboard}
      className="relative px-1 py-4 text-sm text-center rounded-full font-bold bg-black w-[12rem] cursor-pointer overflow-hidden"
    >
      {copied ? (
        <p className="text-white flex items-center justify-center gap-2">
          <CheckCheck className="w-5" />
          Email has Copied!
        </p>
      ) : (
        <p className="flex items-center justify-center text-white gap-2">
          <Copy className="w-5" />
          Copy Email Address
        </p>
      )}
    </button>
  );
};
