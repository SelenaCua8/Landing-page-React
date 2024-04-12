import {Transition} from '../Transition';
import {SearchLocation} from '../SearchLocation'
import {SearchProperty} from '../SearchProperty'
import {SearchPriceRange} from '../SearchPriceRange'
import { SearchButton } from '../SearchButton';



export function FloatedSearch() {
    return (
        <Transition className="absolute bottom-10 md:-bottom-10 left-0 right-0 w-[75%] mx-auto">
        <div className="flex-col justify-between gap-4 py-4 bg-white rounded-md md:flex md:flex-row backdrop-blur shadow-light">
            <SearchLocation />
            <SearchProperty />
            <SearchPriceRange />
            <SearchButton />

        </div>
        </Transition>
    )
} 
