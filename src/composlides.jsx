// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./composlides.css";
// const data = [
//   {
//     image:
//       "https://www.labrakita.co.uk/application/files/3116/0811/7304/TopTips.jpg",
//     heading: "ADVICES",
//     content: "NAMAN",
//   },
//   {
//     image:
//       "https://i0.wp.com/www.campuzine.com/wp-content/uploads/2022/01/The-6-Best-Contest-Software.jpg?w=1000&ssl=1",
//     heading: "GROUP SESSION",
//     content: "ANUJ",
//   },
//   {
//     image: "https://media.collegedekho.com/media/img/careers/doctor-clinic.jpg",
//     heading: "PRIVATE CONSULTANCY",
//     content: "ANSHUL",
//   },
//   {
//     image:
//       "https://img.freepik.com/premium-vector/group-therapy-session-different-people-sitting-circle-talkingconcept-group-therapy_410216-138.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1708473600&semt=ais",
//     heading: "CHALLENGES",
//     content: "PARTH",
//   },

//   {
//     image:
//       "https://img.freepik.com/premium-vector/group-therapy-session-different-people-sitting-circle-talkingconcept-group-therapy_410216-138.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1708473600&semt=ais",
//     heading: "CHALLENGES",
//     content: "PARTH",
//   },
// ];

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
// };

// const Composlides = () => {
//   return (
   
//     <div className="mainbox" >
//       <Slider {...settings}>
//         {data.map((item, index) => {
//           return (
//             <div key={index}>
//               <div className="container">
            
//               <img src={item.image} alt={item.heading} />
              
              
//               <div  className="contentd">
//                 <h3>{item.heading}</h3>
//                 <p>{item.content}</p>
//                 </div>
                
//                 </div>
                  
                 
//               </div>
              
//           );
//         })}
//       </Slider>
//     </div>
//   );
// };

// export default Composlides;







// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./composlides.css";

const data = [
  {
    image:
      "https://www.labrakita.co.uk/application/files/3116/0811/7304/TopTips.jpg",
    heading: "ADVICES",
    content: "NAMAN",
  },
  {
    image:
      "https://i0.wp.com/www.campuzine.com/wp-content/uploads/2022/01/The-6-Best-Contest-Software.jpg?w=1000&ssl=1",
    heading: "GROUP SESSION",
    content: "ANUJ",
  },
  {
    image: "C:/Users/nanyj/Downloads/pvtconsultancy2.jpeg",
    heading: "PRIVATE CONSULTANCY",
    content: "ANSHUL",
  },
  {
    image:
      "https://img.freepik.com/premium-vector/group-therapy-session-different-people-sitting-circle-talkingconcept-group-therapy_410216-138.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1708473600&semt=ais",
    heading: "CHALLENGES",
    content: "PARTH",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Composlides = () => {
  return (
    <div className="mainbox">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <div className="container">
              <img src={item.image} alt={item.heading} />
              <div className="contentd">
                <h3>{item.heading}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Composlides;
