// Header.js
import Image from 'next/image';
import Logo from '@/src/assets/PT. TEKNO JAYA - SOAL UUK KELAS XI.png';

const Header = () => (
  <header className="w-full bg-blue-500 text-white py-4 px-6 shadow-md">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="Logo Tekno Jaya"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>
      <nav className="flex space-x-4">
        <span className="block w-8 h-1 bg-white"></span>
        <span className="block w-8 h-1 bg-white"></span>
        <span className="block w-8 h-1 bg-white"></span>
        <span className="block w-8 h-1 bg-white"></span>
      </nav>
    </div>
  </header>
);

export default Header;