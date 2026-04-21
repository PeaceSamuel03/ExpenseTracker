import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-pink-200 mt-10 py-6 px-6 shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                {/*left side*/}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                        Expense Tracker
                    </h2>
                    <p className="text-sm text-gray-500">
                        Manage your income and expense smarter.
                    </p>
                </div>

                {/*center*/}
                <div className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Expense Tracker. All rights reserved.
                </div>

                {/* Right Side */}
                <div className="flex gap-4 text-xl text-gray-600">
                    <a href="#" className="hover:text-primary transition">
                        <FaGithub />
                    </a>
                    <a href="#" className="hover:text-primary transition">
                        <FaLinkedin />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;