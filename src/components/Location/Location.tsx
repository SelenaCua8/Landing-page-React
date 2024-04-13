import { Transition } from '../Transition/Transition';
import { Map } from 'leaflet';
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { MarkerHouse } from './MarkerHouse';


"use client"

export function Location() {
    const coordinatePoint = {
        lat: 40.463667,
        lng: -3.74922 // Changed 'long' to 'lng'
    };
    const centerMarker = (position: {lat:number, lng:number }, fnMap: Map) =>{
        fnMap.flyTo({
            lat: position.lat,
            lng: position.lng
        })
    }

    return (
        <Transition className='px-4 py-8 md:py-44 md:px-36'> 
            <div className='text-center text-secondary' id='location'>Localización</div>
            <h2 className='max-w-2xl mx-auto my-4 text-3xl font-semibold text-center'>Disponibles en toda España, con la comunidad de propiedades más grande desde 2020</h2>
            <MapContainer center={coordinatePoint} zoom={6} scrollWheelZoom={false} className='h-[700px]'>
                <TileLayer url='https://(s).basemaps.cartocdn.com/rasrertiles/voyager_labels_under/{z}/{x}/{y}.png' />
                <MarkerHouse selectMarker={centerMarker}/>
            </MapContainer>
        </Transition>
    );
}
