import ImageSlider from "./ImageSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutMe = () => {
    return ( 
        <div className="grow flex flex-col w-full md:mx-auto md:w-3/4">
            <div className="mt-4">
                <img src="ja.jpg" alt="Dimitrije Petrovic" className="w-40 mx-auto"/>
                <p className="text-center text-5xl font-bold">DIMITRIJE PETROVIĆ</p>
                <p className="text-center text-4xl font-semibold">Software engineer</p>
            </div>

            <div className="my-16 md:mx-auto flex flex-col w-full gap-y-4">
                <div className="flex flex-col-reverse md:flex-row md:justify-between gap-y-4 md:gap-x-16 md:gap-y-0 mx-1 md:mx-0">
                    <ImageSlider />
                    <div className="my-auto md:w-[45%]">
                        <p className="text-2xl font-bold">Faculty of Mathematics 2019 - 2024</p>
                        <p className="text-xl">My studies were a wild mix of late-night coding, caffeine overloads, and just enough fun to keep me sane!</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-y-4 md:gap-x-4 md:gap-y-0 mx-1 md:mx-0">
                    <div className="my-auto md:w-[45%]">
                        <p className="text-2xl font-bold"><a href="https://www.deversity.com/" className="text-blue-400">Deversity</a> and <a href="https://infaloom.com/" className="text-blue-400">Infaloom</a> 2022 - 2024</p>
                        <p className="text-xl">My 2 years of work were all about coding cool projects, meeting amazing people at Deversity and Infaloom, and squeezing in some table tennis matches and chess in between!</p>
                    </div>
                    <img src="infaloomDimitrije.png" alt="Infaloom experience" className="mx-auto w-[90%] md:w-[45%] md:mx-0"/>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:justify-between gap-y-4 md:gap-x-4 md:gap-y-0 mx-1 md:mx-0">
                    <img src="padel.jpg" alt="Padel" className="mx-auto w-[90%] md:w-[45%] md:mx-0"/>
                    <div className="mx-auto my-auto md:w-[45%] md:mx-0">
                        <p className="text-2xl font-bold">Hobbies 2000 - ????</p>
                        <p className="text-xl">My hobbies keep me on the move — football, basketball, padel, running, and hiking, always chasing new heights!</p>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default AboutMe;