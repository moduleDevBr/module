"use client";

import { useState } from "react";
import Logo from "@/app/_components/Logo";
import Button from "@/app/_components/Button";

export default function Home() {
  const [color, setColor] = useState(true);
  return (
    <main className={`main ${color ? "white" : "black"}`}>
      <Logo color={color} large={true} setColor={setColor} />
      <Button textLink={"Quem somos"}  link={"/quem-somos"} fixed={true} color={color} />
    </main>
  );
}
