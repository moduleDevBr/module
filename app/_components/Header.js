import Image from "next/image";
import Link from "next/link";

export default function Header({ textLink, link, color }) {
  return (
    <header className="header">
      <Link href={link} className="button">
        <h1>{textLink}</h1>
        {color ? (
          <Image
            src="/icon-arrow-up-black.svg"
            width={24}
            height={24}
            alt="Icone seta para cima"
          />
        ) : (
          <Image
            src="/icon-arrow-up-white.svg"
            width={24}
            height={24}
            alt="Icone seta para cima"
          />
        )}
      </Link>
    </header>
  );
}
