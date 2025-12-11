import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          style={{
            transform: 'translateZ(20px)',
            boxShadow: '0 10px 40px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.5)',
            animation: 'pulse-green 2s infinite',
          }}
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
          <style>{`
            @keyframes pulse-green {
              0%, 100% {
                box-shadow: 0 10px 40px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.5);
              }
              50% {
                box-shadow: 0 10px 40px rgba(37, 211, 102, 0.6), 0 0 0 10px rgba(37, 211, 102, 0);
              }
            }
          `}</style>
        </button>
      )}
    </>
  );
}
