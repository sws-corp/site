"use client";

import { motion } from "motion/react";
import { Card } from "@/components/shadcn/card";
import { Terminal } from "lucide-react";

interface TipCardProps {
  tip: {
    category: string;
    tip: string;
    details: string;
  };
  index: number;
}

export function TipCard({ tip, index }: TipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="relative bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#90CA03]/20 p-6 hover:border-[#90CA03]/60 transition-all duration-300 h-full flex flex-col justify-between group hover:transform hover:scale-[1.02]">
        <div className="absolute top-3 right-3">
          <Terminal className="w-4 h-4 text-[#90CA03] opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
        <div>
          <div className="text-[#90CA03] font-mono text-sm mb-2">
            <span className="opacity-50">[</span>
            {tip.category}
            <span className="opacity-50">]</span>
          </div>
          <h3 className="text-[#90CA03] font-bold mb-4 font-mono text-lg">
            {tip.tip}
          </h3>
        </div>
        <p className="text-gray-400 font-mono text-sm border-t border-[#90CA03]/10 pt-4 group-hover:text-gray-300 transition-colors">
          {tip.details}
        </p>
      </Card>
    </motion.div>
  );
}