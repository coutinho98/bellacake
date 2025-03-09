import { useState } from "react"

const Header = () => {
    return (
        <div className="w-full h-full absolute bg-(--color-background)">
            <header className="flex items-center text-white py-6 px-8">
                <a href="" className="text-4xl hover:scale-105 transition-all">Belle Cake</a>
                <div className="flex justify-center flex-grow">
                    <ul className="flex items-center gap-12 font-semibold text-base">
                        <li className="p-3 cursor-pointer underline-animation">Home</li>
                        <li className="p-3 cursor-pointer underline-animation">Produtos</li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;