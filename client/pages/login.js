import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/solid'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex w-full justify-center items-center p-2">
            <img
              className="h-8 w-auto sm:h-10"
              src="https://vectr.com/ismith3/dFeSUHh1h.svg?width=640&height=640&select=dFeSUHh1hpage0"
              alt=""
            />
            <h1 className="text-2xl text-red-600 font-extrabold pl-4">D&amp;D Spellbook</h1>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800 dark:text-gray-200">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-700 dark:text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/sign-up">
              <a className="font-medium text-red-600 hover:text-red-500">
                Sign up
              </a>
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 dark:bg-darkGray border border-gray-400 dark:border-gray-700 placeholder-gray-500 text-gray-700 dark:text-gray-200 rounded-t-md focus:outline-none dark:focus:ring-gray-600 dark:focus:border-gray-600 focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 dark:bg-darkGray border border-gray-400 dark:border-gray-700 placeholder-gray-500 text-gray-700 dark:text-gray-200 rounded-b-md focus:outline-none dark:focus:ring-gray-600 dark:focus:border-gray-600 focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-red-600 active:ring-0 focus:ring-0 focus:shadow-none focus:ring-offset-0 border-gray-400 dark:border-gray-800 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700 dark:text-gray-400">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-red-600 hover:text-red-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-red-500 group-hover:text-red-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
