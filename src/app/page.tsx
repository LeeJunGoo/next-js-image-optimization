import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      href="/image-src"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      aria-current="page"
                    >
                      이미지 접근 방식
                    </Link>
                    <Link
                      href="/img-ImageComponent"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      img vs ImageComponent
                    </Link>
                    <Link
                      href="/image-sizes"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      next/image-sizes
                    </Link>
                    <Link
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Calendar
                    </Link>
                    <Link
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Reports
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <a
                href="/image-src"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                이미지 접근 방식
              </a>
              <a
                href="/img-ImageComponent"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                img vs ImageComponent
              </a>
              <a
                href="/image-sizes"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                next/image-sizes
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Calendar
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Reports
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
