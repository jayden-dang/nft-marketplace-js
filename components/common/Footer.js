import Image from 'next/image'

export default function Footer() {
  return (
      <footer className="items-start justify-between px-6 py-4 dark:bg-dark-color bg-white dark:border-dark-color-1 border-gray-color-1">
      <div className="items-center justify-center w-full flex">
        <a className="flex items-center space-x-4 justify-center">
          <Image src="/assets/logo.png" height={50} width={50} layout="intrinsic" alt='logo' />
            <h1 className="text-2xl font-bold flex font-poppins">The NFT Marketplace</h1>
          <Image src="/assets/logo.png" height={50} width={50} layout="intrinsic" alt='logo' />
        </a>
      </div>
      <div className='lg:col-span-8 col-span-7 text-center'>
        Copyright © 2022 by <a href="https://www.youtube.com/channel/@blockofvu" className="text-reject cursor-pointer">Dang Quang Vu</a> - <a href="https://github.com/vugomars/nft-marketplace-js" className="font-bold fond-poppins">Github</a>

      </div>
    </footer>
  )
}
