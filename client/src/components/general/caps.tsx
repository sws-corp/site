type CapsProps = {
  text: string;
};

export default function Caps({ text }: CapsProps){
    return(
        <div className="border border-[#BBCFDC] px-[15px] py-[5px] rounded-4xl bg-[#fffff/10] text-xs">
            {text.toUpperCase()}
        </div>
    )
}