import { useNavigationStore } from '@/store/useNavigationStore';
import { Menu, X } from 'lucide-react';

const MenuIcon = () => {
    const { openNavigation, toggleNavigation } = useNavigationStore();

    return (
        <div className="flex lg:hidden">
            {openNavigation ? (
                <X
                    size={24}
                    onClick={toggleNavigation}
                    className="cursor-pointer"
                />
            ) : (
                <Menu
                    size={24}
                    onClick={toggleNavigation}
                    className="cursor-pointer"
                />
            )}
        </div>
    );
};

export default MenuIcon;
