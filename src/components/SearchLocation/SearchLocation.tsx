import { useState } from 'react'
import { GrFormDown, GrLocation, GrFormUp } from 'react-icons/gr'

export function SearchLocation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer">


            <GrLocation />

            <div>
                <p>Localización</p>
                <p className="text-xs">Selecciona tu localización</p>
            </div>
            {isOpen ? (
                <GrFormUp />
            ) : (
                <GrFormDown />
            )}

        </div>
    )
}
