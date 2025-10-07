import React from 'react';
import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white font-[font2] mt-0 mb-0 w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 border-t border-neutral-800 px-6 lg:px-20 py-10 lg:py-12">

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {['FB', 'IG', 'IN'].map((label) => (
            <button
              key={label}
              className="border-2 border-white rounded-full px-6 py-2 text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              {label}
            </button>
          ))}

          <button className="border-2 border-lime-400 text-lime-400 rounded-full px-6 py-2 text-lg hover:bg-lime-400 hover:text-black transition-all duration-300">
            BE
          </button>

          <button className="border-2 border-white rounded-full px-6 py-2 text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
            CONTACT <span className="text-xl">♥</span>
          </button>
        </div>

        {/* Footer Bottom Info */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full border-t border-neutral-700 pt-6 gap-4 text-xs lg:text-sm text-neutral-300">
          {/* Location + Time */}
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <span>MONTREAL_06:18:23</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {[
              'POLITIQUE DE CONFIDENTIALITÉ',
              'AVIS DE CONFIDENTIALITÉ',
              'RAPPORT ÉTHIQUE',
              'OPTIONS DE CONSENTEMENT',
              'RETOUR EN HAUT',
            ].map((text, index) => (
              <span
                key={index}
                className="hover:text-white cursor-pointer transition-colors duration-200"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
