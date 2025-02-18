import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { Input } from "@/components/input";
import { ArrowRight, Copy } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div>Hello world!</div>
      <p className="font-sans">RBRASILDEV</p>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <Input />
    </main>
  );
}
