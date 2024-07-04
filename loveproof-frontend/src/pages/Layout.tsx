import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-purple-700 text-white p-4 flex flex-col">
        <div className="text-2xl font-bold mb-8">LoveProof</div>
        <nav className="flex flex-col gap-4">
          <Link to="/community" className="hover:bg-purple-500 p-2 rounded">Community</Link>
          <Link to="/loyalty-checkers" className="hover:bg-purple-500 p-2 rounded">Loyalty Checkers</Link>
          <Link to="/messages" className="hover:bg-purple-500 p-2 rounded">Messages</Link>
          <Link to="/missions" className="hover:bg-purple-500 p-2 rounded">Missions</Link>
          <Link to="/account" className="hover:bg-purple-500 p-2 rounded">Account</Link>
          <Link to="/faq" className="hover:bg-purple-500 p-2 rounded">FAQ</Link>
          <Link to="/contact" className="hover:bg-purple-500 p-2 rounded">Contact Us</Link>
          <Link to="/book-call" className="hover:bg-purple-500 p-2 rounded">Book a Call</Link>
          <Link to="/upgrade" className="hover:bg-purple-500 p-2 rounded">Upgrade</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
