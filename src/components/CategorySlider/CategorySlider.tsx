import { useCallback, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Stack } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './CategorySlider.scss';

type Props = {
  children: React.ReactNode[];
};

export const CategorySlider: React.FC<Props> = ({ children }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="CategorySlider">
      {/* <div className="CategorySlider__title-zone"> */}
      <h2 className="CategorySlider__title">What they say about us</h2>

      <Stack direction="row" spacing={3} className='CategorySlider__icons'>
        <ArrowBackIosIcon
          fontSize="small"
          sx={{ cursor: 'pointer' }}
          onClick={handlePrevious}
          // disable={activeIndex === 0}
        />
        <ArrowForwardIosIcon
          fontSize="small"
          sx={{ cursor: 'pointer' }}
          onClick={handleNext}
          // disable={handleDisabled()}
        />
      </Stack>
      {/* </div> */}
      <Swiper
        onSwiper={setSwiperRef}
        // onRealIndexChange={(el: SwiperClass) =>
        //   setActiveIndex(el.activeIndex)
        // }
        className="CategorySlider__slides"
        spaceBetween={24}
        scrollbar={{ draggable: true }}
        slidesPerView={3}
        loop={true}
        // breakpoints={{
        //   370: {
        //     slidesPerView: 3,
        //   },
        //   // 520: {
        //   //   slidesPerView: 3,
        //   // },
        //   // 900: {
        //   //   slidesPerView: 4,
        //   // },
        // }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export { SwiperSlide as Slide };
