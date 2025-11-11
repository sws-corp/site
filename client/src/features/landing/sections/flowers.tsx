import flowers from "@/assets/flowers.png"
import lorrier from "@/assets/lorrier.svg"

export default function Flowers() {
    return (
        <div className="relative w-full clamp-[py,15,20] overflow-hidden flex items-center justify-center bg-black">
            <img
                src={flowers}
                alt="Flowers"
                className="absolute inset-0 w-full h-full object-cover scale-110 opacity-80"
            />
            
 
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
 
            <img src={lorrier} alt="" className="size-20 invert -rotate-z-90 rotate-y-180" />

            <p className="relative z-10 text-white clamp-[text,base,2xl]  text-center px-4 ">
            Hosted and designed in France, <span className="font-bold"> 100% Human generated</span> 😊
            
            </p>

            <img src={lorrier} alt="" className="size-20 invert -rotate-z-90" />


        </div>
    )
}
