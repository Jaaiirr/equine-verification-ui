import { useNavigate } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { RiShieldUserFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { MdFavorite, MdAccountCircle } from "react-icons/md";
// ui
import BtnContact from '../../ui/Button';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
};

const HeaderSection = () => {
    const navigate = useNavigate();
    const navigation = [
        { name: 'Comprar', href: '#comprar', current: true },
        { name: 'Vender', href: '#vender', current: false },
        { name: 'Verificación', href: '#Verificación', current: false },
        { name: 'Servicios', href: '#servicios', current: false },
    ];

    const goToContact = () => {
        navigate('login')
    };

    return (
        <Disclosure as="nav" className="backdrop-blur-md bg-white border-b border-slate-200/60 fixed w-full text-text-primary top-0 z-50">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-16">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo y nombre */}
                    <div className="flex w-auto items-center">
                        <RiShieldUserFill className='text-btn-primary size-9 h-8 w-auto' />
                        <span className='font-bold text-xl tracking-tight text-text-primary'>EquineMarket</span>
                    </div>
                    <div className="sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="p-2 rounded-b-md hover:bg-btn-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-btn-primary">
                            <span className="absolute -inset-0.5" />
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden items-center justify-end gap-4 sm:flex lg:gap-12">
                        <div className="flex gap-4 lg:gap-8">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'hover:text-btn-primary text-text-secondary transition-colors' : 'text-text-secondary hover:text-btn-primary transition-colors',
                                        'rounded-md py-2 text-sm lg:text-base font-medium whitespace-nowrap',
                                    )}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        {/* Button Contact - Desktop */}
                        <div className="shrink-0">
                            <BtnContact onClick={goToContact}>
                                Publicar Caballo
                            </BtnContact>
                        </div>
                        <button className='bg-gray-100 cursor-pointer flex h-10 items-center justify-center transition-colors rounded-lg w-10 hover:bg-gray-200'>
                            <span className='text-[20px]'><IoIosNotifications /></span>
                        </button>
                        <button className='bg-gray-100 cursor-pointer flex h-10 items-center justify-center text-text-primary transition-colors rounded-lg w-10 hover:bg-gray-200'>
                            <span className='text-[20px]'><MdFavorite /></span>
                        </button>
                        <button className='bg-gray-100 cursor-pointer flex h-10 items-center justify-center text-text-primary transition-colors rounded-lg w-10 hover:bg-gray-200'>
                            <span className='text-[20px]'><MdAccountCircle /></span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu panel */}
            <DisclosurePanel className="absolute bg-white/90 backdrop-blur-sm right-0 rounded-bl-lg rounded-tl-lg top-16 shadow-lg p-4 sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'flex justify-end text-text-secondary' : 'flex justify-end text-text-secondary hover:text-btn-primary',
                                'block rounded-md px-3 py-2 font-medium transition-colors',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                    {/* Language Switcher - Mobile */}
                    <div className="flex gap-2 px-3 py-2 justify-end">
                        <BtnContact onClick={goToContact}>
                            Publicar Caballo
                        </BtnContact>
                    </div>
                    <div className='flex justify-between'>
                        <button className='bg-gray-100 cursor-pointer flex h-10 items-center justify-center transition-colors rounded-lg w-10 hover:bg-gray-200'>
                            <span className='text-[20px]'><IoIosNotifications /></span>
                        </button>
                        <button className='bg-gray-100 cursor-pointer flex h-10 items-center justify-center text-text-primary transition-colors rounded-lg w-10 hover:bg-gray-200'>
                            <span className='text-[20px]'><MdFavorite /></span>
                        </button>
                        <button className='bg-gray-100 cursor-pointer flex h-10 items-center justify-center text-text-primary transition-colors rounded-lg w-10 hover:bg-gray-200'>
                            <span className='text-[20px]'><MdAccountCircle /></span>
                        </button>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
};
export default HeaderSection;