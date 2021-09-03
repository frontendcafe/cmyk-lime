import Link from 'next/link';
import Image from 'next/image';

const BottomNavButton = ({ text, route, icon }) => {
  return (
    <div>
      <div>
        <Link href={route} passHref>
          <Image alt="" src={icon}></Image>
        </Link>
      </div>
      <Link href={route} passHref>
        <h1>{text}</h1>
      </Link>
    </div>
  );
};

export default BottomNavButton;
