import { GetTimeLeft } from "./countdown";

export default function CountdownButton(){
    const message = GetTimeLeft(); 
    return(
        <a href="https://www.nuitdelinfo.com/" target="_blank" className="rounded-full px-[16px] py-[8px] md:grow-0 grow flex flex-row bg-primary justify-center items-center gap-[6px]">
            <img src="/svg/nuit-de-l'info.svg" className="invert"/>
            <p className="text-white">{message}</p>
        </a>
    )
}