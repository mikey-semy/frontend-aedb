import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationData } from './Navigation.data';
import { 
    NavigationContainer, 
    NavigationItems, 
    NavigationItem,
    ItemLink,
    ItemIcon,
    ItemLabel 
} from './Navigation.styles';

const Navigation: React.FC<{ isCollapsed: boolean }> = ({ isCollapsed }) => {
    const [items] = useState(NavigationData);
    return (
            <NavigationContainer>
                <NavigationItems>
                    {items.map((item, index) => (
                        <NavigationItem 
                            key={index} 
                            isCollapsed={ isCollapsed }
                        >
                            <ItemLink 
                                as={item.path?.startsWith('http') ? 'a' : NavLink}
                                to={item.path && !item.path.startsWith('http') ? item.path : '#'}
                                href={item.path?.startsWith('http') ? item.path : undefined}
                            >
                                <ItemIcon>
                                    {item.icon && (typeof item.icon === 'function' ? 
                                        <item.icon /> : 
                                        item.icon)
                                    }
                                </ItemIcon>
                                <ItemLabel isCollapsed={ isCollapsed }>
                                    <span>{item.label }</span>
                                </ItemLabel>
                            </ItemLink>
                        </NavigationItem>
                    ))}
                </NavigationItems>
            </NavigationContainer>
    )
}
export default Navigation;