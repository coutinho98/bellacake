import { useState } from "react"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="w-full h-full absolute bg-(--color-background)">
            <header className="flex justify-between items-center text-white py-6 px-8 md:px-32">
                <a href="" className="text-4xl hover:scale-105 transition-all">Belle Cake
                </a>
                <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                    <li className="p-3 hover:underline underline-offset-4 rounded-md transition-all cursor-pointer">Home</li>
                    <li className="p-3 hover:underline underline-offset-4 rounded-md transition-all cursor-pointer">Produtos</li>
                </ul>

                <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
                <div className={`absolute xl:hidden top-24 left-0 w-full bg-(--color-background-100) flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                    <li className="list-none w-full text-center p-4 hover:underline underline-offset-4">Home</li>
                    <li className="list-none w-full text-center p-4 hover:underline underline-offset-4">Produtos</li>

                </div>
            </header>
        </div>
    );
};

export default Header;