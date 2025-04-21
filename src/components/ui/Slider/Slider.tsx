import styles from "./Slider.module.scss";

interface SliderProps {
  className?: string;
}

export const Slider = ({ className = "" }) => {
  return (
    <div className="about__slider slider">
      <div className="slider__wrapper">
        <div className="slider__active"></div>
        <div className="slider__body"></div>
        <div className="slider__dots"></div>
      </div>
      <div className="slider__arrow"></div>
    </div>
  );
};
