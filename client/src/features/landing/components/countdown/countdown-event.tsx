import { GetTimeLeft } from "./countdown";

export default function CountdownButton(){
    const message = GetTimeLeft(); 
    return(
        <a href="https://www.nuitdelinfo.com/" target="_blank" className="rounded-[50px] px-[16px] py-[8px] flex flex-row bg-primary justify-center items-center gap-[6px]">
            <img src="/svg/nuit-de-l'info.svg" className="invert"/>
            <p className="text-white">{message}</p>
        </a>
    )
}