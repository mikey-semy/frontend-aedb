import React, { useState, useEffect, useRef } from 'react';
import { MenuItem } from '../../../types';
import { Link } from 'react-router-dom';

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
    <>
        <div className="menu-item" onClick={item.subItems ? handleToggle : undefined}>
            {item.icon && <span className="menu-item__icon">{item.icon}</span>}
            {item.path ? (
                <Link to={item.path}>
                    {item.label}
                </Link>
            ) : (
                <span className='sub-menu__label'>{item.label}</span>
            )}
            {item.subItems && <span className={`sub-menu-item__icon ${isOpen ? 'sub-menu-item__icon--rotate' : ''}`}>▼</span>}
        </div>
        {isOpen && item.subItems && (
            <div className={`sub-menu ${isOpen ? 'sub-menu--open' : ''}`}>
                {item.subItems.map((subItem, index) => (
                    <div key={index} className="sub-menu-item">
                        {subItem.icon && <span className="menu-item__icon">{subItem.icon}</span>}
                        {subItem.path ? (
                            <Link to={subItem.path}>
                                {subItem.label}
                            </Link>
                        ) : (
                            <span>{subItem.label}</span>
                        )}
                    </div>
                ))}
            </div>
        )}
    </>
    );
};

export default MenuItemComponent;