import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  // { name: 'Product', href: '#' },
  // { name: 'Features', href: '#' },
  // { name: 'Marketplace', href: '#' },
  // { name: 'Company', href: '#' },
]

export default function Hero() {
  return(
    <div className="relative bg-gray-200 dark:bg-darkGray overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="z-10 relative lg:w-2/3 pb-8 bg-gray-200 dark:bg-darkGray sm:pb-16 md:pb-20 lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block z-10 absolute right-0 inset-y-0 h-full w-48 text-gray-200 dark:text-darkGray transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          {/* <Popover>
            {({ open }) => (
              <>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                          <span className="sr-only">Workflow</span>
                          <img
                            className="h-10 w-auto sm:h-10"
                            src="https://vectr.com/ismith3/dFeSUHh1h.svg?width=640&height=640&select=dFeSUHh1hpage0"
                          />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      ))}
                      <a href="#" className="font-medium text-gray-200 hover:text-red-500">
                        Log in
                      </a>
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="https://vectr.com/ismith3/dFeSUHh1h.svg?width=640&height=640&select=dFeSUHh1hpage0"
                            alt=""
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="block w-full px-5 py-3 text-center font-medium text-gray-200 bg-gray-800 hover:bg-gray-100"
                      >
                        Log in
                      </a>
                      <a
                        href="#"
                        className="block w-full px-5 py-3 text-center font-medium text-gray-200 bg-gray-800 hover:bg-gray-100"
                      >
                        Sign up
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover> */}

          <main className="pt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pt-24 xl:pt-32">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 dark:text-gray-200 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">A comprehensive</span>{' '}
                <br className="hidden xl:block" />
                <span className="block text-red-600 xl:inline">D&amp;D spell organizer</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Easily track known spells and quickly access spell details
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="z-0 hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 z-0 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/static/warlock.jpg"
          alt=""
        />
      </div>
      <div className="z-0 lg:hidden">
        <img
          className="z-0 h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/static/warlock-new.jpg"
          alt=""
        />
      </div>
    </div>
  )
}