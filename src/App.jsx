import React from "react";
import stewImg from "./assets/stew.jpg";
import noodlesImg from "./assets/noodles.jpg";
import curryImg from "./assets/curry.jpg";

export default function App() {
    const [menuShown, setMenuShown] = React.useState(false);

    const toggleMenu = () => {
        setMenuShown(prevState => !prevState);
    };

    return (
        <div className="text-gray-600 font-body">
            <div className="grid md:grid-cols-3">
                <div className="md:col-span-1 md:flex md:justify-end">
                    <nav className="text-right">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold uppercase p-4 border-b border-gray-100 text-2xl">
                                <a href="/" className="hover:text-gray-700 hover:scale-110 transform duration-100 inline-block">Food Ninja</a>
                            </h1>
                            <div onClick={toggleMenu} className="px-4 cursor-pointer md:hidden">
                                <svg className="w-6" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                        </div>
                        <ul className={`text-sm mt-6 md:block ${menuShown ? "" : "hidden"}`}>
                            <li className="py-2">
                                <a href="#" className="px-4 flex justify-end gap-2 border-r-4 border-primary">
                                    <div className="flex gap-2 transform hover:scale-110 duration-100">
                                        <span>Home</span>
                                        <svg className="w-5" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                    </div>
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="#" className="px-4 flex justify-end gap-2 border-r-4 border-white">
                                    <div className="flex gap-2 transform hover:scale-110 duration-100">
                                        <span>About</span>
                                        <svg className="w-5" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                        </svg>
                                    </div>
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="#" className="px-4 flex justify-end gap-2 border-r-4 border-white">
                                    <div className="flex gap-2 transform hover:scale-110 duration-100">
                                        <span>Contact</span>
                                        <svg className="w-5" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <main className="px-16 py-6 bg-gray-100 md:col-span-2">
                    <div className="text-primary flex justify-center md:justify-end">
                        <a href="#" className="btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Log in</a>
                        <a href="#" className="ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Sign up</a>
                    </div>

                    <header>
                        <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
                        <h3 className="text-2xl font-semibold">For Ninjas</h3>
                    </header>

                    <div>
                        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>

                        <div className="mt-8 grid lg:grid-cols-3 gap-10">
                            {/* Cards go here */}
                            <div className="card hover:shadow-lg">
                                <img src={stewImg} alt="stew" className="w-full h-32 sm:h-48 object-cover" />
                                <div className="m-4">
                                    <span className="font-bold">5 Bean Chili Stew</span>
                                    <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                                </div>
                                <div className="badge">
                                    <svg className="w-5 inline-block" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span>25 mins</span>
                                </div>
                            </div>
                            <div className="card hover:shadow-lg">
                                <img src={noodlesImg} alt="noodles" className="w-full h-32 sm:h-48 object-cover" />
                                <div className="m-4">
                                    <span className="font-bold">Veg Noodles</span>
                                    <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                                </div>
                                <div className="badge">
                                    <svg className="w-5 inline-block" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span>25 mins</span>
                                </div>
                            </div>
                            <div className="card hover:shadow-lg">
                                <img src={curryImg} alt="curry" className="w-full h-32 sm:h-48 object-cover" />
                                <div className="m-4">
                                    <span className="font-bold">Tofu Curry</span>
                                    <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                                </div>
                                <div className="badge">
                                    <svg className="w-5 inline-block" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span>25 mins</span>
                                </div>
                            </div>
                        </div>

                        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

                        <div className="mt-8">
                            {/* Cards go here */}
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-110 duration-100 hover:bg-opacity-60">Load more</div>
                    </div>
                </main>
            </div>
        </div>
    );
}