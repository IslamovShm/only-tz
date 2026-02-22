import { useRef, useState, useCallback } from "react";
import { Swiper as SwiperType } from "swiper";

interface UseSwiperReturn {
  swiperRef: React.MutableRefObject<SwiperType | null>;
  currentSlide: number;
  totalPages: number;
  isBeginning: boolean;
  isEnd: boolean;
  onSwiper: (swiper: SwiperType) => void;
  onSlideChange: (swiper: SwiperType) => void;
  slidePrev: () => void;
  slideNext: () => void;
  reset: () => void;
}

export function useSwiper(): UseSwiperReturn {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const syncState = useCallback((swiper: SwiperType) => {
    setTotalPages(swiper.snapGrid.length);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const onSwiper = useCallback(
    (swiper: SwiperType) => {
      swiperRef.current = swiper;
      syncState(swiper);
    },
    [syncState]
  );

  const onSlideChange = useCallback(
    (swiper: SwiperType) => {
      setCurrentSlide(swiper.snapIndex + 1);
      syncState(swiper);
    },
    [syncState]
  );

  const slidePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const slideNext = useCallback(() => swiperRef.current?.slideNext(), []);

  const reset = useCallback(() => {
    setCurrentSlide(1);
    setTotalPages(1);
    setIsBeginning(true);
    setIsEnd(false);
  }, []);

  return {
    swiperRef,
    currentSlide,
    totalPages,
    isBeginning,
    isEnd,
    onSwiper,
    onSlideChange,
    slidePrev,
    slideNext,
    reset,
  };
}