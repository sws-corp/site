export function Badge({ text }: { text: string }) {
    return <div className="uppercase px-3 py-1.5 border rounded-full text-[12px] leading-none">
        {text}
    </div>
}
