import Image from 'next/image';
import LogoIcon from '~/assets/images/Logo.png'
const Logo = () => (
  <div className="flex items-center">
    <Image
      src= {LogoIcon} // Replace '/logo.png' with the actual path of your logo image
      alt="Outline Designs Logo"
      width={100} // Set the desired width of your logo
      height={100} // Set the desired height of your logo
    />
    {/* <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
      Outline Designs
    </span> */}
  </div>
);

export default Logo;
