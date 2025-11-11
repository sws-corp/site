import { Button } from "@/components/shadcn/button";
import github_logo from "@/assets/github.png"


export function GithubCTA() {
    return <div className="w-full flex gap-70 py-14 px-15  ">
       
        <div className="flex-1 flex items-start gap-6 flex-col">
            <h1 className="text-[32px] leading-[33px] font-medium">Checkout the repo !</h1>
            <p className="text-muted-foreground text-[18px] leading-[27px]">The repo includes a fully configured stack using Bun, Hono, Vite, and React optimized for speed and simplicity. Just clone, install, and run!</p>
            <Button variant={"secondary"} className="rounded-full p-5">Fork on Github</Button>
        </div>

        <div className="hidden lg:block">
                <img src={github_logo} alt="Github" />
        </div>
    </div>
}