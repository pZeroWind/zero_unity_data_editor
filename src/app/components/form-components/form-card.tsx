import Card from "../card";

export default function FormCard({
    header,
    children,
    footer,
    action,
    method
}: Readonly<{
    header?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    action?: string;
    method?:string;
}>){
    return (
        <form action={action} method={method}>
            <Card header={header} footer={footer}>
                {children}
            </Card>
        </form>
    )
}