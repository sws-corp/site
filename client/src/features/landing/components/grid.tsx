import  { JSX } from "react";

export function VerticalBand({height,count}:{height?:number,count?:number}) {
    return <div style={{height:height ?? "80px"}} className="h-[80px] w-full divide-x border-border flex ">
        {[...Array(count ?? 100)].map((index) => <div key={index} className="flex-1 " />)}
    </div>
}
 
export function HorizontallBand({height,count}:{height?:number,count?:number}) {
    return <div style={{height:height ?? "40px"}} className="h-[80px] w-full divide-y border-border flex flex-col ">
        {[...Array(count ?? 3)].map((index) => <div key={index} className="flex-1 " />)}
    </div>
}

export function GridWrapper({ children }: { children: JSX.Element[] }) {
    return <div className="max-w-[1280px] mx-auto  flex flex-col items-center  border divide-y divide-border">
        {children}
    </div>
}