import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div className="flex container pt-8 gap-8">
      <Link href={"/videos"}>
        <Image width={40} height={20} src="/assets/logo.png" alt="logo" />
      </Link>
      <SearchInput />
      <ModeToggle />
    </div>
  );
}
