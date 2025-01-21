export default function Card({
    header,
    children,
    footer
}: Readonly<{
    header?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col flex-grow bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <div className="pl-4 pb-4 select-none">
                {header}
            </div>
            <div className="flex-1 pl-4">
                {children}
            </div>
            <div className="pl-4 pt-3">
                {footer}
            </div>
        </div>
    )
}