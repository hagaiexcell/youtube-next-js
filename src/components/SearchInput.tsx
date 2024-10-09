"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchInput() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim() !== "") {
      router.push(`/videos?query=${search.trim()}`);
    }
  };
  return (
    <div className="flex w-full items-center gap-4">
      <Input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Cari Video" />
      <Button onClick={handleSearch} type="submit">
        Search
      </Button>
    </div>
  );
}
