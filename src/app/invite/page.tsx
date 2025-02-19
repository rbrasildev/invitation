import Image from "next/image"
import logo from '../../assets/logo.svg'
import { InputField, InputIcon, InputRoot } from "@/components/input"
import { Copy, Link } from "lucide-react"

export default function InvitePage() {
    return (
        <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
            <div className="flex flex-col gap-10 w-full max-w-[550px]">
                <Image src={logo} alt="devstage" width={108.5} height={30} />

                <div className="space-y-2">
                    <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">Inscrição confirmada</h1>
                    <p className="text-gray-300">Para entrar no evento, acesse o link enviado para seu email.</p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-3">
                        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                            Indique e ganhe
                        </h2>
                        <p className="text-gray-300">
                            Convide mais pessoas para o evento e concorra a prêmios excluisivos! É só compartilhar o link abaixo e acompnhar as incrições:
                        </p>
                    </div>

                    <InputRoot>
                        <InputIcon>
                            <Link className="size-5" />
                        </InputIcon>

                        <InputField readOnly defaultValue="https:www.redeconexaonet.com" />

                        <InputIcon>
                            <Copy className="size-5" />
                        </InputIcon>
                    </InputRoot>

                    <div className="grid gap-3 md:grid-cols-3">
                        <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
                            <span className="font-heading text-2xl font-semibold text-gray-200 leadin-none">1042</span>
                            <span className="text-sm text-gray-300 leading-none text-center">Acesso ao Link</span>
                        </div>
                        <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
                            <span className="font-heading text-2xl font-semibold text-gray-200 leadin-none">1042</span>
                            <span className="text-sm text-gray-300 leading-none text-center">Inscrições feitas</span>
                        </div>
                        <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
                            <span className="font-heading text-2xl font-semibold text-gray-200 leadin-none">1042</span>
                            <span className="text-sm text-gray-300 leading-none text-center">Posição no ranking </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-2-[440px] space-y-5">
                <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">Ranking de indicações</h2>
            </div>

            <div className="space-y-4">
                <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-4">
                    <span className="text-sm text-gray-300 leading-none">Raimundo Oliveira</span>
                </div>
            </div>
        </div>
    )
}