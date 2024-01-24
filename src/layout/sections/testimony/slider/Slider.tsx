import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "./Slider_Styles";

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
};

const items = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
];

export const Slider: React.FC = () => (
    <S.Slider>
        <S.SliderWrapper>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
            />
        </S.SliderWrapper>
    </S.Slider>



);

// import React from 'react';
// import {Slide} from "./Slide";
// import {S} from "./Slider_Styles";
//
// const slideData = [
//     {
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       author: "@Ivan Ivanon",
//       company: "Company 1",
//     },
// ]
//
// export const Slider: React.FC = () => {
//     return (
//         <S.Slider>
//             <S.SliderWrapper>
//
//                 {slideData.map((s, index) => {
//                     return <Slide text={s.text}
//                                   author={s.author}
//                                   company={s.company}
//                                   key={index}/>
//                 })}
//
//             </S.SliderWrapper>
//             <S.Pagination>
//                 <S.PaginationItem></S.PaginationItem>
//                 <S.PaginationItem className={"active"}></S.PaginationItem>
//                 <S.PaginationItem></S.PaginationItem>
//             </S.Pagination>
//         </S.Slider>
//     );
// };
