import Hero from "@/features/landing/sections/hero"
import { VerticalBand, GridWrapper } from "@/features/landing/components/grid";
import { Team } from "@/features/landing/sections/team";
import { OurAwards } from "@/features/landing/sections/awards";
import { GithubCTA } from "@/features/landing/sections/github"; 
import Flowers from '../features/landing/sections/flowers';
import { HorizontallBand } from '../features/landing/components/grid';
import { useWindowSize } from '../hooks/use-window-size';
import ScrollReveal from '@/components/global/scroll-reveal';
import { Stacks } from "@/features/landing/sections/stacks";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Home() { 
	useDocumentTitle('titles.home');
	
	const [width] = useWindowSize()
	const is_mobile = width < 640
	const is_tablet = width >= 640 && width < 1024

	const band_height = is_mobile ? 50 : is_tablet ? 60 : 80
	const band_count = is_mobile ? 60 : is_tablet ? 80 : 100
	return (
		<div className="flex flex-col clamp-[gap,2rem,4rem]">
			<Hero/>
			<GridWrapper>  
				
				<ScrollReveal>
					<Team />
				</ScrollReveal>
				<VerticalBand height={band_height} count={band_count} />
				<ScrollReveal delay={0.1}>
					<OurAwards />
				</ScrollReveal>
				<VerticalBand height={band_height} count={band_count} />
				<ScrollReveal delay={0.2}>
					<Flowers/>
				</ScrollReveal>
				<HorizontallBand/>
				<ScrollReveal delay={0.3}>
					<Stacks />
					<GithubCTA />
				</ScrollReveal>
				<VerticalBand height={band_height} count={band_count} />
			</GridWrapper>
		</div>
	);
}

export { Home };
