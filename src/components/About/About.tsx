import { Transition } from '../Transition/Transition';
import Image from 'next/image';
export function About() {
    return (
        <Transition className='grid gap-4 px-4 py-5 md:py-44 md:px-36 md:grid-cols-2'>
            <div className='flex flex-col items-center justify-center max-w-xl mb-7'>
                <h4 className='text-secondary'>Sobre nosotros</h4>
                <h2 className='my-4 text-3xl font-bold'>Mas de 1000 vivienda spara vender y comprar en enstein</h2>
                <h4 className='mb-10 mt-7'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis molestiae itaque ratione assumenda ut necessitatibus voluptas dolorum ducimus incidunt, optio quod ullam atque hic quibusdam amet pariatur vero. Quasi!
                    Aperiam iste, doloremque soluta maiores, quasi animi, eveniet perspiciatis quaerat itaque odio nihil provident atque quas. Cum similique veritatis cupiditate, natus et laudantium quaerat illo dolorum dolore sunt, maiores nulla.
                </h4>
                <button className='px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-block'>Cargar más</button>

            </div>
            <div className='flex items-center justify-center'>
            <Image src='/assets/house.jpg' alt='About' width={350} height={450} className='w-auto h-auto' priority/>
            </div>

        </Transition>
    )
}
