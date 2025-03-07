const Header = () => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border-t-4 border-pink-500 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-100 rounded-full opacity-50">
                <div className="absolute top-10 right-10 w-16 h-16 bg-purple-100 rounded-full opacity-60">
                    <h1 className="text-3xl font-bold text-center text-pink-600 mb-2 relative z-10">Belle Cake</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;