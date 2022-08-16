import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() { 
    return (
        <div className="relative">
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
        <div>
            <img loading="lazy" src="images/banner-image1.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="images/banner-image2.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="images/banner-image3.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="images/banner-image4.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="images/banner-image5.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="images/banner-image6.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="images/banner-image7.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="images/banner-image8.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="images/banner-image9.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="images/banner-image10.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="images/banner-image11.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="images/banner-image12.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="images/banner-image13.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="images/banner-image14.jpg" alt="" />
        </div>
        </Carousel>
        </div>
    )
}
export default Banner