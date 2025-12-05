import React from 'react';


const LOGOS = [
    { name: 'Logoipsum 1', url: 'https://logoipsum.com/logo/logo-1.svg' },
    { name: 'Logoipsum 2', url: 'https://logoipsum.com/logo/logo-2.svg' },
    { name: 'Logoipsum 3', url: 'https://logoipsum.com/logo/logo-3.svg' },
    { name: 'Logoipsum 4', url: 'https://logoipsum.com/logo/logo-4.svg' },
    { name: 'Logoipsum 5', url: 'https://logoipsum.com/logo/logo-5.svg' },
    { name: 'Logoipsum 6', url: 'https://logoipsum.com/logo/logo-6.svg' },
];

const LogoMarquee = () => {
    return (
        <div className="relative bg-white rounded-3xl mx-4 mb-8 py-8 overflow-hidden flex items-center">
            <div className="flex gap-16 animate-scroll whitespace-nowrap pl-16">
                {/* Render logos twice for seamless loop */}
                {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                    <div key={index} className="shrink-0 flex items-center justify-center opacity-50 transition-opacity duration-300 hover:opacity-100">
                        {/* Using text placeholder styled as logo if image fails, or actual SVG if available */}
                        <span className="font-bold text-2xl text-gray-600 font-sans flex items-center gap-2 before:content-[''] before:block before:w-6 before:h-6 before:bg-current before:rounded-full before:opacity-50">
                            Logoipsum
                        </span>
                    </div>
                ))}
            </div>
            <div className="absolute top-0 bottom-0 w-[150px] z-10 pointer-events-none left-0 bg-gradient-to-r from-white to-transparent rounded-tl-3xl rounded-bl-3xl"></div>
            <div className="absolute top-0 bottom-0 w-[150px] z-10 pointer-events-none right-0 bg-gradient-to-l from-white to-transparent rounded-tr-3xl rounded-br-3xl"></div>
        </div>
    );
};

export default LogoMarquee;
