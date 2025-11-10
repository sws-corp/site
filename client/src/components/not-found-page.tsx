import { WarpBackground } from "./warp-background";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function NotFoundPage() {
	const { t } = useTranslation();

	return (
		<WarpBackground 
			className="min-h-screen bg-black overflow-hidden"
			perspective={150}
			beamsPerSide={8}
			beamSize={5}
			beamDuration={4}
			beamDelayMax={1}
			beamDelayMin={0}
			gridColor="rgba(255, 255, 255, 0.05)"
		>
			<main className="flex flex-col items-center justify-center min-h-screen p-4 relative overflow-hidden">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="text-center z-10 max-w-full"
				>
					<h1 className="text-8xl sm:text-9xl lg:text-[180px] font-black mb-8 text-white font-sans">
						404
					</h1>
					
					<div className="space-y-4 px-4">
						<p className="text-xl sm:text-2xl text-gray-400">
							{t('404.message')}
						</p>
					</div>
				</motion.div>
			</main>
		</WarpBackground>
	);
}
