export default function Header3({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    return <div className="text-1xl font-bold text-gray-900">{children}</div>
}