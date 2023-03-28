import { useContext, useState } from "react";
import { Context } from "../context/Context";
import Header from "../layout/Header";
import seaImage from '../../assets/images/Layout/background.jpg'
import pic1 from  '../../assets/images/Pieces/pic1.jpg'
import pic2 from  '../../assets/images/Pieces/pic2.jpg'
import pic3 from  '../../assets/images/Pieces/pic3.jpg'

import AnimalItem from './AnimalItem'


function Home() {


    const context = useContext(Context);

    const backGrounds = {
        'backgroundImage': `URL(${seaImage})`,
    }

    return (
        <div style={backGrounds} className="text-white bg-cover bg-no-repeat">
            <div className="bg-black bg-opacity-40">
                <Header />
                <div className="md:p-14">
                    <div className="md:px-14 w-1/2">
                        <h1 className="text-5xl font-bold leading-tight pl-14 -mr-40">
                            Dive Club Explode the word
                        </h1>
                        <hr className="mt-5 mb-10" />
                        <p className="pl-6">
                            Dive Club Explode the word
                            Dive Club Explode the word
                            Dive Club Explode the word
                            Dive Club Explode the word
                            Dive Club Explode the word
                            Dive Club Explode the word
                        </p>
                    </div>

                    <div className="py-20 grid text-center">
                        <div className="text-3xl justify-center font-bold flex items-center">
                            <h2>Underwater.</h2>
                            <hr className="ml-5 w-16 border-2 rounded" />
                        </div>
                        <div className="mx-auto py-5 w-2/3">Dive Club Explode the word
                            Dive Club Explode the word
                            Dive Club Explode the word
                            Dive Club Explode the word
                            Dive Club Explode the word</div>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        <AnimalItem name="Sua" src={pic1}/>
                        <AnimalItem name="Ca Ngua" src={pic2}/>
                        <AnimalItem name="evil Ca" src={pic3}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home