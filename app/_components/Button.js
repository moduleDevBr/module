// import Image from "next/image";
import Link from "next/link";

export default function Button({ textLink, link, fixed, color }) {
  return (
    <Link href={link} className={`button ${fixed && "fixed"}`}>
      {textLink}
      {color ? (
        <img
          src="/icon-arrow-down-black.svg"
          width={24}
          height={24}
          alt="Icone seta para baixo"
        />
      ) : (
        <img
          src="/icon-arrow-down-white.svg"
          width={24}
          height={24}
          alt="Icone seta para baixo"
        />
      )}
    </Link>
  );
}
