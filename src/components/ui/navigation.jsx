import React from 'react';

const Navigation = () => {
    const menuItems = [
        { label: 'Tour Guide', href: '/' },
    ];

    return (
        <div className="flex space-x-4">
            {menuItems.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    {item.label}
                </a>
            ))}
        </div>
    );
};

export default Navigation;