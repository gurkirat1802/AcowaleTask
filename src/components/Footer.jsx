import { Copyright } from "lucide-react";

const Footer = () => {
    return (
        <>
            <div className="footer bg-gradient-to-r from-slate-900 to-slate-700 h-auto w-full p-8 mt-10 border-t-2 border-slate-700 rounded-t-lg shadow-lg">
                <div className="text-white text-3xl font-bold mb-6 text-center">Acowale News</div>
                <div className="links flex flex-col md:flex-row gap-10 justify-between items-center pb-8">
                    <div className="text-center md:text-left">
                        <ul className="flex flex-col text-white font-medium text-[16px] gap-4">
                            <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Cookie Preferences</li>
                            <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Accessibility</li>
                            <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">User Agreement</li>
                            <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Press Releases</li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <ul className="flex flex-col text-white font-medium text-[16px] gap-4">
                            <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Our Mission</li>
                            <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Advertise with Us</li>
                            <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Investor Relations</li>
                            <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Feedback</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <p className="flex text-slate-400 py-4 justify-center bg-gradient-to-r from-slate-900 to-slate-700 border-t border-slate-700 text-center">
                    <span className="flex items-center gap-1">
                        Copyright <Copyright /> 2024 Acowale News Site
                    </span>
                </p>
            </div>
        </>
    );
};

export default Footer;