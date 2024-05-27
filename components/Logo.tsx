import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="" height={100} width={200} priority={true} />
    </Link>
  );
}
