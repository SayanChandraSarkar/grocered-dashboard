
import s1 from "./image/s-1.webp";
import s2 from "./image/s-2.webp";
import s3 from "./image/s-3.webp";
import s4 from "./image/s-4.webp";

import p1 from "./image/p-1.webp";
import p2 from "./image/p-2.webp";
import p3 from "./image/p-3.webp";
import p4 from "./image/p-4.webp";
import p5 from "./image/p-5.webp";
import p6 from "./image/p-6.webp";
import p7 from "./image/p-7.webp";
import p8 from "./image/p-8.webp";
import p9 from "./image/p-9.webp";

import u1 from "./image/u-2.webp";
import u2 from "./image/u-3.webp";
import u3 from "./image/u-4.webp";
import u4 from "./image/u-5.webp";
import u5 from "./image/u-1.webp";


const list = {
    s: [s1, s2, s3, s4, s1],
    u: [u1, u2, u3, u4, u5],
    p: [p1, p2, p3, p4, p5, p6, p7, p8, p9],
    orders: [
        { dp: u1, name: "Ishaan", amount: 500 },
        { dp: u2, name: "Dhruv", amount: 563 },
        { dp: u3, name: "Ram", amount: 1877 },
        { dp: u4, name: "Sayan", amount: 153 },
        { dp: u5, name: "Rohit", amount: 764 },
        { dp: u1, name: "Soumick", amount: 234 },
        { dp: u3, name: "Anjali", amount: 180 },
        { dp: u2, name: "Ajay", amount: 456 },
        { dp: u4, name: "Ishaan", amount: 1566 }
    ],
    products: [
        { id: 100, image: p1, name: "Product 1", mrp: "134", qty: "200ml" },
        { id: 101, image: p2, name: "Product 2", mrp: "45", qty: "500g" },
        { id: 102, image: p3, name: "Product 3", mrp: "13", qty: "1Kg" },
        { id: 103, image: p4, name: "Product 4", mrp: "87", qty: "20g" },
        { id: 104, image: p5, name: "Product 5", mrp: "145", qty: "1L" },
        { id: 105, image: p6, name: "Product 6", mrp: "245", qty: "20g" },
        { id: 106, image: p7, name: "Product 7", mrp: "399", qty: "1Kg" },
        { id: 107, image: p8, name: "Product 8", mrp: "35", qty: "20g" },
        { id: 108, image: p9, name: "Product 9", mrp: "65", qty: "200g" }
    ],
    stories: [
        { image: s1, dp: u1, text: "Use up lots of cars" },
        { image: s2, dp: u2, text: "10 Expert Tips for Grocery Shopping on a Budget" },
        { image: s3, dp: u3, text: "Learn how to Buy perishable foods in quantities you’ll use" },
        { image: s4, dp: u4, text: "10 Expert Tips for Grocery Shopping on a Budget to use up lots of tomatoes" },
        { image: s1, dp: u5, text: "18 easy recipes to use up lots of tomatoes" },
    ]
};
export default list;