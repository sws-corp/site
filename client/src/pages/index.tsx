import Hero from "@/features/landing/sections/hero"
import { VerticalBand, GridWrapper } from "@/features/landing/components/grid";
import { Team } from "@/features/landing/sections/team";
import { OurAwards } from "@/features/landing/sections/awards";
import { GithubCTA } from "@/features/landing/sections/github"; 
import Flowers from '../features/landing/sections/flowers';
import { HorizontallBand } from '../features/landing/components/grid';
import { useWindowSize } from '../hooks/use-window-size';

export default function Index() { 
	const [width] = useWindowSize()
	const is_mobile = width < 640
	const is_tablet = width >= 640 && width < 1024

	const band_height = is_mobile ? 50 : is_tablet ? 60 : 80
	const band_count = is_mobile ? 60 : is_tablet ? 80 : 100
	return (
		<>
		<Hero/>
		<GridWrapper>  
			
            <VerticalBand  height={band_height} count={band_count}  />
			<Team />
			<VerticalBand height={band_height} count={band_count} />
            <OurAwards />
			<VerticalBand height={band_height} count={band_count} />
			<Flowers/>
			<HorizontallBand/>
            <GithubCTA />
            <VerticalBand height={band_height} count={band_count} />
		</GridWrapper>
		</>
	);
}
