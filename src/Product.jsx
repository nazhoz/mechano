import tick from './Assets/checkmark.png'
import basic from "./Assets/periodic/basic service.jpg"
import std from './Assets/periodic/standard service.jpg'
import comper from './Assets/periodic/comperhensive service.jpg'
import frontbrake from './Assets/periodic/brake maintaince.jpg'
import rearbrake from './Assets/periodic/rear brake service.png'
import discser from './Assets/periodic/disc service.png'
import discturn from './Assets/periodic/disc turning.jpg'


export const periodicservice=[
    {
    id: 1,
    image: basic,
    price: "Rs 25999",
    amount: "18299/-",
    title: "Basic Services",
    time: "4 hrs Taken",
    tickmark:tick,
    detailone:"Wiper Fluid Replacement",
    detailtwo:"Battery Water Top Up",
    detailthree:"Engine Oil Replacement",
    detailfour:"Air filter cleaning",
    detailfive:"Wiper Fluid Replacement",
    detailsix:"Oil Filter Replacements"
    },
    {
        id: 2,
        image: std,
        price: "Rs.27,999",
        amount: " 20299",
        title: "Standard Services",
        time: "8 hrs Taken",
        tickmark:tick,
        detailone:"Frond Brake Pads Service",
        detailtwo:"Fuel filter Change",
        detailthree:"Ac Filter Cleaning",
        detailfour:"Air filter cleaning",
        detailfive:"Coolent Top Up",
        detailsix:"Brake Fluid Top up"
        },
        {
            id: 3,
            image: comper,
            price: "Rs.34,999",
            amount: " 25599",
            title: "Comperhensive Serivces",
            time: "8 hrs Taken",
            tickmark:tick,
            detailone:"Fuel Filter Checking",
            detailtwo:"Car Scanning",
            detailthree:"Wheel Alignment",
            detailfour:"Engine Oil Replacement",
            detailfive:"Engine Flushing",
            detailsix:"Tyre Rotation"
            },
            {
                id: 4,
                image: frontbrake,
                price: "Rs.16,920",
                amount: " 13530",
                title: "Brake Maintenance",
                time: "3 hrs Taken",
                tickmark:tick,
                detailone:"One Month Warranty",
                detailtwo:"Opening & fitting pads",
                detailthree:"Applicable two sets",
                detailfour:"Front Brake Cleaning",
                detailfive:"Front brakes replacement",
                detailsix:"Incpection of Brake Pads "
                },
                {
                    id: 5,
                    image: rearbrake,
                    price: "Rs.15,675",
                    amount: " 12540",
                    title: "Rear Brake Servicesv",
                    time: "3 hrs Taken",
                    tickmark:tick,
                    detailone:"One Month Warranty",
                    detailtwo:"Opening & fitting pads",
                    detailthree:"Applicable two sets",
                    detailfour:"Front brakes replacement",
                    detailfive:"Incpection of Brake Pads",
                    detailsix:"Front Brake Cleaning"
                    },{
                        id: 6,
                        image: discser,
                        price: "Rs.16,250",
                        amount: " 13299",
                        title: "Front Disc Brakes Services",
                        time: "5 hrs Taken",
                        tickmark:tick,
                        detailone:"Front Disc Brake Replacement",
                        detailtwo:"Increases Brake Life & Safety",
                        detailthree:"Open & fitting of Disc Brakes",
                        detailfour:"Reduces Vibration & Noises",
                        detailfive:"Free Pickup & Drop",
                        detailsix:"Corrosion Resistance"
                        },
                        {
                            id: 7,
                            image: discturn,
                            price: "Rs.3,999",
                            amount: " 2299",
                            title: "Disc turning",
                            time: "4 hrs Taken",
                            tickmark:tick,
                            detailone:"1 Month Warranty",
                            detailtwo:"Opening of Brakes Discs",
                            detailthree:"Fitting of Brakes Discs",
                            detailfour:"Applicable for 2 sets Discs",
                            detailfive:"Incpection of Brake Discs",
                            detailsix:"Resurfacing of Brake Discs"
                            }

]