import MatrixRain from "@/features/elite/components/matrice";
import { motion } from "motion/react";
import { Terminal } from "lucide-react";
import { codingTips } from "@/features/elite/tips";
import { TipCard } from "@/features/elite/components/card";

export default function Elite() {
 
    return (
         <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden">
          <MatrixRain 
          fontSize={20}
          color="#00ff00"
          characters="01"
          fadeOpacity={0.1}
          speed={1.0}
          />
          <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 py-12"
        >
          <div className="flex flex-col items-center justify-center mb-12 space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="relative"
            >
              <Terminal className="h-20 w-20 text-[#90CA03]" />
            </motion.div>
            <h1 className="text-5xl font-bold text-[#90CA03] font-mono text-center">
              SWS ELITE
            </h1>
            <p className="text-gray-400 font-mono text-center max-w-2xl px-4 sm:px-0">
              Conseils d&apos;experts SWS pour dominer la compétition. <br /> Téléchargez notre guide
              et élevez votre niveau.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            {/* <PDFDownloadButton /> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {codingTips.map((tip, index) => (
              <TipCard key={tip.id} tip={tip} index={index} />
            ))}
          </div>
        </motion.div>
        </div>
        </div>
    );
}