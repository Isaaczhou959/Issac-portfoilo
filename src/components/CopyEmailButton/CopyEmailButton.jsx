import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "issaczwl@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-bold bg-black w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            key="copied"
            className="text-white flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <CheckCheck className="w-5" />
            Email has Copied!
          </motion.p>
        ) : (
          <motion.p
            key="copy"
            className="flex items-center justify-center text-white gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Copy className="w-5" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
