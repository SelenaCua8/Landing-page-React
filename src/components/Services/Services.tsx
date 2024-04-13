"use client"

import { Transition } from "../Transition"
import { Slider } from "./Slider"

export function Services() {
    return (
        <Transition className="grid px-4 py-8 md:py-46 md:px-36 md:grid-cols-2 md:gap-28">
            <div className="max-w-xl mb-7">
                <h4 className="text-secondary">Servicios</h4>
                <h2 className="my-4 text-xl font-semibold">Promociona tu vivienda para alquilarla o venderla al mejor precio</h2>
                <p className="mb-10 mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat quas, vel enim magnam quibusdam modi. Voluptatem dolores molestias, expedita ullam atque explicabo non quibusdam, eos debitis temporibus quos! Accusantium.
                Distinctio sapiente officia tempora nostrum modi quasi nesciunt facilis reprehenderit accusantium nemo corporis architecto reiciendis iusto ut perferendis laborum temporibus voluptate nisi ullam, possimus minus adipisci similique placeat natus! Necessitatibus!
                Reprehenderit tenetur odit ea quo non sequi eos praesentium qui asperiores rem omnis, doloribus corporis vel dolorum totam est enim ducimus corrupti. Incidunt quasi dignissimos accusamus ut neque. Quod, unde?</p>


            </div>
            <div className="flex items-center justify-center">
                <Slider/>
            </div>

             </Transition>
    )
}
