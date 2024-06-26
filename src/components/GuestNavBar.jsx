import React,{Fragment} from 'react'
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon,BellIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import logo from "../assets/Logo.svg";
import { useNavigate } from 'react-router-dom';


export const GuestNavBar = () => {
  const navigate = useNavigate()

    const {t} = useTranslation();

    const navigation = [
      {
        name: t('Home'), link: ""
      },
  { name: t('reviews') , link: "" },
  { name: t('admin'), link: "" },

];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
       <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto w-screen px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-[100px] items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-[70px] w-[70px]"
                    src={logo}
                    alt="company logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block items-center justify-center my-4">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className={classNames(
                          item.current ? ' bg-white text-primary-color' : 'text-gray-300 hover:bg-white hover:text-primary-color',
                          'rounded-md px-3 py-2 text-[16px] font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 gap-3 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button onClick={()=>{
                navigate("/login")
              }} className=' rounded-md border border-primary-color text-primary-color px-3 font-semibold text-[14px] py-1.5
               '>{t('patient')}</button>
              <button className=' rounded-md bg-primary-color text-white px-5 font-semibold text-[14px] py-2'>{t('doctor')}</button>
              
             
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
