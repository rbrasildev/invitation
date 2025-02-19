
import Image from "next/image"
import logo from '../assets/logo.svg'
import { ArrowRight, Radio, User } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
      <div className="min-h-dvh flex justify-center gap-16 flex-col">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <Image src={logo} alt="devstage" width={108.5} height={30} />
          <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
            <span className="text-blue">CodeCraft</span>
            Summit 2025
          </h1>
        </div>

        <div className="flex gap-5 items-stretch flex-col  md:flex-row">
          <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-semibold text-gray-200 text-xl">Sobre o evento</h2>
              <span className="text-purple font-semibold text-xs flex items-center gap-2" >
                <Radio className="size-5" />
                AO VIVO
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dicta voluptas quia libero iste hic doloremque aspernatur aliquam? Distinctio, eaque!
              <br />
              <br />
              Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
            </p>
          </div>

          <form className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]" action="">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">Inscrição</h2>

            <div className="spacey-y-3">
              <InputRoot>
                <InputIcon>
                  <User />
                </InputIcon>
                <InputField type="text" placeholder="Nome completo" />
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <User />
                </InputIcon>
                <InputField type="email" placeholder="Email" />
              </InputRoot>
            </div>
            <Button type="submit">
              Confimar
              <ArrowRight />
            </Button>
          </form>

        </div>
      </div>

    </main>
  );
}
