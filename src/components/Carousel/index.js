import { MainSlider, Wrap } from './styles';
import { ListBanners } from '../../utils/lists';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
    const settings = {
        dots: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
    }

    return (
        <MainSlider {...settings}>
            {ListBanners.map((item, index) => (
                <Wrap key={index}>
                    <img src={item.image} alt={item.banner} />
                </Wrap>
            ))}
        </MainSlider>
    )
}

export default Carousel;
