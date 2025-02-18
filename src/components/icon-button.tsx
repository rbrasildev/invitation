import { ComponentProps, ReactNode } from "react"

interface IconButttonProps extends ComponentProps<"button"> { }
export function IconButton(props: IconButttonProps) {
    return <button className="p-2 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
        {...props}
    />

}