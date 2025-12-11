import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export default function Layout({ children, currentPage, onNavigate, onLogout }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        currentPage={currentPage}
        onNavigate={onNavigate}
        isMobileMenuOpen={isMobileMenuOpen}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
      />
      <Navbar
        onLogout={onLogout}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />
      <main className="lg:ml-64 pt-16">
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
