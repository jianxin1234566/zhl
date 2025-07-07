import Link from "next/link";

export default function DdddddNavbar() {
  return (
    <nav className="bg-[#0F1923] border-b-2 border-[#FF4655] shadow-lg z-50 w-full">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <span className="text-2xl font-extrabold tracking-widest text-white select-none">作业平台</span>
        <div className="flex items-center gap-8 text-lg font-bold">
          <Link href="/" className="hover:text-[#FF4655] transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:text-[#FF4655]">首页</Link>
        </div>
      </div>
    </nav>
  );
} 