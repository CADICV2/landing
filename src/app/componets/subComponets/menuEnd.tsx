import React from 'react';

interface MenuItemProps {
  label: string;
}

const Menu = () => {
  const menuItems = [
    { label: 'Website Design' },
    { label: 'Dashboard' },
    { label: 'NFT ART' },
    { label: 'Development' },
    { label: 'Strategy' },
    { label: 'Motion Design' },
    { label: 'NFT ART' },
    { label: 'Development' },
    { label: 'Strategy' },
    { label: 'Motion Design' },
  ];

  return (
    <div className=" flex justify-center items-center bg-[#53535379] py-4 "> {/* Aplicar la rotación aquí */}
      <nav className="flex space-x-6">
        {menuItems.map((item, index) => (
          <MenuItem key={index} label={item.label} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
  return (
    <div className="flex items-center space-x-2 text-white">
      <span className="text-xl font-bold">{label}</span>
      <span className="text-orange-500 text-xl">✦</span>
    </div>
  );
};

export default Menu;
