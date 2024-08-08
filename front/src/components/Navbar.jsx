import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logoBoxFitOscuro.png';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const navigation = [
  { name: 'Home', href: '/home', current: true },
  { name: 'Appointments', href: '/appointments', current: false },
  { name: 'Activities', href: '/activities', current: false },
  { name: 'About us', href: '/aboutUs', current: false },
  { name: 'Register/Login', href: '/register-login', current:false}
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {

  const location = useLocation();
  const user = useSelector((state) => state.user.user);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
         
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src={logo}
                className="h-11"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  if (item.name === 'Appointments' && !user) {
                    return null;
                  }
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={classNames(
                        isActive ? 'bg-orange-700 text-white' : 'text-orange-500 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
         
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="px-2 pb-3 pt-2">
          {navigation.map((item) => (
            item.name === 'Appointments' && !user ? null : (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-orange-600 text-white' : 'text-orange-400 hover:bg-orange-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            )
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
