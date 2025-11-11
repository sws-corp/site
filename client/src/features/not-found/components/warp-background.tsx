import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { HTMLAttributes, useCallback, useMemo } from "react";

// Source : https://magicui.design/docs/components/warp-background

interface WarpBackgroundProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	perspective?: number;
	beamsPerSide?: number;
	beamSize?: number;
	beamDelayMax?: number;
	beamDelayMin?: number;
	beamDuration?: number;
	gridColor?: string;
}

const Beam = ({
	width,
	x,
	delay,
	duration,
}: {
	width: string | number;
	x: string | number;
	delay: number;
	duration: number;
}) => {
	const hue = Math.floor(Math.random() * 360);
	const ar = Math.floor(Math.random() * 10) + 1;

	return (
		<motion.div
			style={
				{
					"--x": `${x}`,
					"--width": `${width}`,
					"--aspect-ratio": `${ar}`,
					"--background": `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
				} as React.CSSProperties
			}
			className={`absolute left-(--x) top-0 aspect-[1/var(--aspect-ratio)] [background:var(--background)] w-(--width)`}
			initial={{ y: "100cqmax", x: "-50%", opacity: 0 }}
			animate={{ 
				y: "-100%", 
				x: "-50%",
				opacity: 1
			}}
			transition={{
				y: {
					duration,
					delay,
					repeat: Infinity,
					ease: "linear",
				},
				x: {
					duration: 0,
				},
				opacity: {
					duration: 0.5,
					delay,
					ease: "easeIn"
				}
			}}
		/>
	);
};

export const WarpBackground: React.FC<WarpBackgroundProps> = ({
	children,
	perspective = 100,
	className,
	beamsPerSide = 3,
	beamSize = 5,
	beamDelayMax = 3,
	beamDelayMin = 0,
	beamDuration = 3,
	gridColor = "rgba(0, 100, 200, 0.3)",
	...props
}) => {
	const generateBeams = useCallback(() => {
		const beams = [];
		const cellsPerSide = Math.floor(100 / beamSize);
		const step = cellsPerSide / beamsPerSide;

		for (let i = 0; i < beamsPerSide; i++) {
			const x = Math.floor(i * step);
			const delay =
				Math.random() * (beamDelayMax - beamDelayMin) + beamDelayMin;
			beams.push({ x, delay });
		}
		return beams;
	}, [beamsPerSide, beamSize, beamDelayMax, beamDelayMin]);

	const topBeams = useMemo(() => generateBeams(), [generateBeams]);
	const rightBeams = useMemo(() => generateBeams(), [generateBeams]);
	const bottomBeams = useMemo(() => generateBeams(), [generateBeams]);
	const leftBeams = useMemo(() => generateBeams(), [generateBeams]);

	return (
		<div className={cn("relative w-full h-full", className)} {...props}>
			<div
				style={
					{
						"--perspective": `${perspective}px`,
						"--grid-color": gridColor,
						"--beam-size": `${beamSize}%`,
					} as React.CSSProperties
				}
				className={
					"pointer-events-none absolute left-0 top-0 size-full overflow-hidden [clip-path:inset(0)] @container-[size] perspective-(--perspective) transform-3d"
				}
			>
				{/* top side */}
				<div className="absolute transform-3d bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] @container h-[100cqmax] origin-[50%_0%] transform-[rotateX(-90deg)] w-[100cqi]">
					{topBeams.map((beam, index) => (
						<Beam
							key={`top-${index}`}
							width={`${beamSize}%`}
							x={`${beam.x * beamSize}%`}
							delay={beam.delay}
							duration={beamDuration}
						/>
					))}
				</div>
				{/* bottom side */}
				<div className="absolute top-full transform-3d bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] @container h-[100cqmax] origin-[50%_0%] transform-[rotateX(-90deg)] w-[100cqi]">
					{bottomBeams.map((beam, index) => (
						<Beam
							key={`bottom-${index}`}
							width={`${beamSize}%`}
							x={`${beam.x * beamSize}%`}
							delay={beam.delay}
							duration={beamDuration}
						/>
					))}
				</div>
				{/* left side */}
				<div className="absolute left-0 top-0 transform-3d bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] @container h-[100cqmax] origin-[0%_0%] transform-[rotate(90deg)_rotateX(-90deg)] w-[100cqh]">
					{leftBeams.map((beam, index) => (
						<Beam
							key={`left-${index}`}
							width={`${beamSize}%`}
							x={`${beam.x * beamSize}%`}
							delay={beam.delay}
							duration={beamDuration}
						/>
					))}
				</div>
				{/* right side */}
				<div className="absolute right-0 top-0 transform-3d bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] @container h-[100cqmax] origin-[100%_0%] transform-[rotate(-90deg)_rotateX(-90deg)] w-[100cqh]">
					{rightBeams.map((beam, index) => (
						<Beam
							key={`right-${index}`}
							width={`${beamSize}%`}
							x={`${beam.x * beamSize}%`}
							delay={beam.delay}
							duration={beamDuration}
						/>
					))}
				</div>
			</div>
			<div className="relative z-10">{children}</div>
		</div>
	);
};
