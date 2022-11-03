import { useTheme } from "next-themes"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const {theme,setTheme} = useTheme();

    return (
        <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-dark-color bg-white dark:border-dark-color-1 border-gray-color-1">
          <Link href="">
              <div className="flex flex-1 flex-row justify-start">
                <Image src="/assets/logo.png" height={32} width={32} alt="logo" />
              </div>
          </Link>
        </nav>
    )
}

export default Navbar
