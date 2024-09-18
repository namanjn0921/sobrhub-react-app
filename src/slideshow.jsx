

// import Slider from "react-slick";
// import "./slideshow.css"

// const slideImages = [
//   {
//     url: "https://i.ytimg.com/vi/b6Dte96WdqM/maxresdefault.jpg",
//     caption: "first slide",
//   },
//   {
//     url: "https://www.springfieldwellnesscenter.com/wp-content/uploads/2023/10/Can-You-stop-Addiction-before-it-Starts_.jpg",
//     caption: "second slide",
//   },
//   {
//     url: "https://www.healthifyme.com/blog/wp-content/uploads/2017/06/Quit-Smoking-Feature.jpg",
//     caption: "third slide",
//   },
//   {
//     url: "https://assets.nhs.uk/campaigns-cms-prod/images/images-og-smoking.width-1200.jpg",
//     caption: "fourth slide",
//   },
// ];

// function Slideshow() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 100,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
        
//           {slideImages.map((item, index) => {
//             return (
//               <div key={index}>
//                 <img className="imageS" src={item.url}  />

//               </div>

              

//             )
            
//           })}
//                </Slider>
//       </div>
 
  
//   );
// }

// export default Slideshow






import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideshow.css";

const slideImages = [
  {
    url: "https://i.ytimg.com/vi/b6Dte96WdqM/maxresdefault.jpg",
    caption: "first slide",
  },
  {
    url: "https://www.springfieldwellnesscenter.com/wp-content/uploads/2023/10/Can-You-stop-Addiction-before-it-Starts_.jpg",
    caption: "second slide",
  },
  {
    url: "https://www.healthifyme.com/blog/wp-content/uploads/2017/06/Quit-Smoking-Feature.jpg",
    caption: "third slide",
  },
  {
    url: "https://assets.nhs.uk/campaigns-cms-prod/images/images-og-smoking.width-1200.jpg",
    caption: "fourth slide",
  },
];

function Slideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Adjust speed to 500ms for smooth transitions
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Adjust the speed of autoplay (3000ms = 3 seconds)
    pauseOnHover: false, // Prevent pausing on hover
    pauseOnFocus: false, // Prevent pausing on focus
    pauseOnDotsHover: false, // Prevent pausing when hovering over dots
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slideImages.map((item, index) => (
          <div key={index} className="slide">
            <img className="imageS" src={item.url} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slideshow;

