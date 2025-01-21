export default function Header1({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    return <div className="text-3xl font-bold text-gray-900">{children}</div>
}