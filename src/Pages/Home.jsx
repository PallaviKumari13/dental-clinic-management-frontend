import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from '../Components/Slider';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import Flower from "../assets/bgggg.jpg"
import Music from "../assets/bggg.jpeg"
import Food from "../assets/bg.jpeg"


export const Home = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='max-h-[80vh] w-[80%]  flex justify-center items-center'>
                <Slider />
            </div>

            <div className='h-[20vh] flex items-center bg-purple-300 w-full justify-center mt-4'>
                <h1 className='text-center text-blue-900 text-3xl font-display'>
                    Better Teeth, <br /> Healthy Teeth.
                </h1>
            </div>

            <div className='flex flex-row'>
                <Card title={"Decoration"} image={Flower} />
                <Card title={"Lorem 1"} image={Food} />
                <Card title={"Loremn 1"}
                    image={Music}
                />
            </div>

        </div>
    )
}
