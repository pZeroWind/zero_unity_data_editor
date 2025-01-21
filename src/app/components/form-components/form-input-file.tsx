"use client";
import { useEffect, useRef, useState } from "react";
import FormButton from "./form-button";

export default function FormInputFile({
    label,
    placeholder,
    btnName,
    folder,
}: Readonly<{
    label: React.ReactNode;
    placeholder?: string;
    btnName: React.ReactNode;
    folder?:boolean;
}>) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [folderPath, setFolderPath] = useState(String);
    if(folder){
        useEffect(() => {
            if (fileInputRef.current) {
                // 动态设置 webkitdirectory 属性来启用文件夹选择
                fileInputRef.current.setAttribute("webkitdirectory", "true");
            }
        }, []);
    }

    const OpenFileSelector = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const FileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 1) {
            const firstFile = files[0];
            const folderPath = firstFile.webkitRelativePath.split("/")[0]; // 提取文件夹名称
            setFolderPath(folderPath);
        }
    }

    return (
        <div className="flex pb-1 pt-1 items-center select-none">
            {label}
            <div className="flex-1">
                <input className="hidden" type="file" ref={fileInputRef} onChange={FileSelected} />
                <input className="p-1 pl-3 pr-3 ml-2 mr-4 outline-none rounded" type="text" value={folderPath} placeholder={placeholder} />
            </div>
            <div className="w-32 h-8 font-bold">
                <FormButton onClick={OpenFileSelector}>{btnName}</FormButton>
            </div>
        </div>
    )
}