export default function Header2({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    return <div className="text-2xl font-bold text-gray-900">{children}</div>
}