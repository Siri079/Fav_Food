export const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="grid grid-cols-3 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
                    <ul className="text-gray-300">
                        <li className="mb-4">
                            <a href="/about" className=" hover:underline">About</a>
                        </li>
                        <li className="mb-4">
                            <a href="/menu" className="hover:underline">Menu</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
                    <ul className="text-gray-300">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Connect With Us</h2>
                    <ul className="text-gray-300">
                        <li className="mb-4">
                            <a href="tel:9966263388" className=" hover:underline">Phone</a>
                        </li>
                        <li className="mb-4">
                            <a href="mailto:saisirikamkanampati@gmail.com" className="hover:underline">Gmail</a>
                        </li>
                    </ul>
                </div> 
            </div>
            <div className="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-300 sm:text-center">© 2023 FAV FOOD. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}