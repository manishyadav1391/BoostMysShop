export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-5 h-16 bg-white z-50 border-b shadow">
      <div className="flex items-center gap-2">
        <span className="text-green-500 text-2xl">🏪</span>
        <span className="text-xl font-bold">boostmyshop</span>
      </div>

      <button className="p-2">☰</button>
    </header>
  );
}