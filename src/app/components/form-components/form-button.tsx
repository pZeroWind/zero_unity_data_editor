
import { MouseEventHandler } from "react";

export enum ButtonType {
    Normal,
    Submit,
}

export default function FormButton({
    onClick,
    type,
    children
}: Readonly<{
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    type?: ButtonType;
    children?: React.ReactNode;
}>) {
    switch (type) {
        case ButtonType.Submit:
            return (
                <button type="submit" onClick={onClick} className="w-full h-full bg-black text-white rounded hover:bg-gray-800 font-bold">{children}</button>
            )
        default:
            return (
                <button type="button" onClick={onClick} className="w-full h-full bg-gray-500 text-white rounded hover:bg-gray-800 font-bold">{children}</button>
            )
    }
}