"use client";

import { useState } from "react";
import Logo from "@/app/_components/Logo";
import Button from "@/app/_components/Button";

export default function Home() {
  const [color, setColor] = useState(true);
  return (
    <main className={`main ${color ? "white" : "black"}`}>
      <Logo color={color} large={true} setColor={setColor} />
      <section className="center">
        <Button
          textLink={"Quem somos"}
          link={"/quem-somos"}
          fixed={false}
          color={color}
        />
      </section>
    </main>
  );
}
