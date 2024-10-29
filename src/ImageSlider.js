import Slider from "react-slick";

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return ( 
        <div className="mx-auto w-[90%] md:w-[45%] md:mx-0">
            <Slider {...settings}>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/Petar.jpeg`} alt="Petar"/>
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/Vuksa.jpeg`} alt="Vukasin"/>
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/Dico.jpeg`} alt="Dimitrije"/>
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/Bogdan.jpeg`} alt="Bogdan"/>
                </div>
            </Slider>
        </div> 
    );
}
 
export default ImageSlider;