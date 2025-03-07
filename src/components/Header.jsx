const Header = () => {
    return (
        <div className="w-full h-full absolute bg-(--color-background)">
            <header className="flex justify-between items-center text-white py-6 px-8 md:px-32">
                <a href="" className="text-4xl hover:scale-105 transition-all">Belle Cake
                </a>
                <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                    <li className="p-3 hover:underline underline-offset-4 rounded-md transition-all cursor-pointer">Home</li>
                    <li className="p-3 hover:underline underline-offset-4 rounded-md transition-all cursor-pointer">Produtos</li>
                </ul>
                <div className="relative hidden md:flex items-center justify-center gap-3"></div>
            </header>
        </div>
    );
};

export default Header;