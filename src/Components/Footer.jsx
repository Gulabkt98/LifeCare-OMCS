import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="text-sm text-gray-600">© {new Date().getFullYear()} LifeCare. All rights reserved.</div>
                    <div className="flex gap-4 text-sm">
                        <a className="text-gray-600 hover:text-gray-800" href="/about">About</a>
                        <a className="text-gray-600 hover:text-gray-800" href="/privacy">Privacy</a>
                        <a className="text-gray-600 hover:text-gray-800" href="/contact">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
