import sliderimage from "../assets/slider.jpg";

function Slider() {
  return (
    <div
      id="singleSlider"
      className="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={sliderimage} className="d-block w-100" alt="Slider" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
