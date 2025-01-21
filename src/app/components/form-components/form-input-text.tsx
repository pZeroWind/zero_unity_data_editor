"use client";

export default function FormInputText({
    label,
    placeholder,
}: Readonly<{
    label: React.ReactNode;
    placeholder?: string;
}>) {
    return (
        <div className="flex pb-1 pt-1 items-center select-none">
            {label}
            <div className="flex-1">
                <input className="p-1 pl-3 pr-3 ml-2 w-full md:w-96 outline-none rounded" type="text" placeholder={placeholder} />
            </div>
        </div>
    )
}