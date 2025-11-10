import { GetTimeLeft } from "./countdown";

export default function CountdownButton(){
    const message = GetTimeLeft(); 
    return(
        <div className="rounded-[50px] px-[16px] py-[8px] flex flex-row bg-[#F5F3EF] justify-center items-center gap-[6px]">
            <img src="/svg/nuit-de-l'info.svg"/>
            <p>{message}</p>
        </div>
    )
}