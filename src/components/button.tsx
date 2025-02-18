import { ReactNode } from "react"

interface ButttonProps {
    children: ReactNode
}
export function Button(props: ButttonProps) {
    return <button className="px-5 h-12 flex justify-between items-center bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300">
        {props.children}
    </button>
}