import Image from 'next/image'
import { useState, useEffect } from "react";
import { getQueryPhotos } from '../utils/pexels';


export async function getServerSideProps(context) {
    const data = await getQueryPhotos(context);
    return {
      props: {
        data,
      },
    };
  }

  



export default function Lookbook({data}) {

    const [photos, setPhotos] = useState(data);

    return (
        <>
        
        <section className='max-w-full'>
                <div className="w-full h-full py-12 px-6 text-base lg:text-2xl font-semibold uppercase text-black text-center bg-gradient-to-br from-indigo-600 via-pink-400  to-amber-400">
                    <p className='mb-2'>Here is a Selection of photos & videos of our daily routine and our recent{' '}collection.</p>
                    <p>You can also watch our videos on <span className="underline">Youtube</span></p>
            </div>
        </section>

        <section className='max-w-full text-center'>
            <h1 className='text-2xl lg:text-4xl uppercase m-4'>Videos</h1>
            <div className='aspect-video w-full md:w-2/3 h-auto m-auto'>
        <video className="video scl-50a" muted={true} loop={true} autoPlay={true} controls={true}>
          <source src="jaajskateboard-large.mp4" type="video/mp4" />
        </video>
        </div>
        </section>
        
        <section className='max-w-full text-center'>
            <h1 className='text-2xl lg:text-4xl uppercase m-4'>Gallery</h1>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6">
                        {
                            photos.map((pic) => (
                                <div key={pic.id}>
                                <Image
                                    src={pic.src.portrait}
                                    height={450}
                                    width={400}
                                    alt={pic.url}
                                    className="object-cover aspect-auto"
                                />
                                </div>
                            ))
                        }
                    
                </div>


            
        </section>
        </>
    )
}