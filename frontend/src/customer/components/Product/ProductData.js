const products = [
    {
        id: "101",
        name: "Product 1",
        image: "https://tse1.mm.bing.net/th?id=OIP.mM_SGRNJsrE64cxPqh4xzwHaIF&pid=Api&P=0&h=180",
        price: 120.00,
        currency: "USD",
        availability: "In stock",
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "Free shipping over 850₹ orders.",
        category: "Clothing",
        link: "/productOverview/101",
        mrp: 150.00,          // Added MRP
        discountRate: 20,     // Added discount rate (in percentage)
    },
    {
        id: "102",
        name: "Product 2",
        image: "https://tse2.mm.bing.net/th?id=OIP.X0rcNRRNItEK06oq9-4lMwHaIw&pid=Api&P=0&h=180",
        price: 150.00,
        currency: "USD",
        availability: "In stock",
        sizes: ["S", "M", "L"],
        description: "Limited stock available. Order now!",
        category: "Clothing",
        link: "/productOverview/102",
        mrp: 200.00,          // Added MRP
        discountRate: 25,     // Added discount rate (in percentage)
    },
    {
        id: "103",
        name: "Product 3",
        image: "https://tse4.mm.bing.net/th?id=OIP.RHzRocDQ-VPOif5AmSbAeQHaKl&pid=Api&P=0&h=180",
        price: 200.00,
        currency: "USD",
        availability: "Out of stock",
        sizes: ["M", "L", "XL"],
        description: "Restocking soon. Stay tuned!",
        category: "Clothing",
        link: "/productOverview/103",
        mrp: 250.00,          // Added MRP
        discountRate: 20,     // Added discount rate (in percentage)
    },
    {
        id: "104",
        name: "Product 4",
        image: "https://tse1.mm.bing.net/th?id=OIP.6w5SA3F4dXdSAiImxe2q7wHaHa&pid=Api&P=0&h=180",
        price: 90.00,
        currency: "USD",
        availability: "In stock",
        sizes: ["XS", "S", "M"],
        description: "Best quality at an affordable price!",
        category: "Accessories",
        link: "/productOverview/104",
        mrp: 120.00,          // Added MRP
        discountRate: 25,     // Added discount rate (in percentage)
    },
    {
        id: "105",
        name: "Product 5",
        image: "https://tse4.mm.bing.net/th?id=OIP.p7GifsgsIQ4nlC4YUT5dkAHaHx&pid=Api&P=0&h=180",
        price: 175.00,
        currency: "USD",
        availability: "In stock",
        sizes: ["M", "L"],
        description: "Stylish and comfortable for daily wear.",
        category: "Shoes",
        link: "/productOverview/105",
        mrp: 220.00,          // Added MRP
        discountRate: 20,     // Added discount rate (in percentage)
    },
    {
        id: "106",
        name: "Product 6",
        image: "https://tse4.mm.bing.net/th?id=OIP.YSgNolo4vuupVT9co2khngHaJ4&pid=Api&P=0&h=180",
        price: 130.00,
        currency: "USD",
        availability: "In stock",
        sizes: ["S", "M", "L", "XL"],
        description: "Perfect fit for any occasion.",
        category: "Jackets",
        link: "/productOverview/106",
        mrp: 160.00,          // Added MRP
        discountRate: 18,     // Added discount rate (in percentage)
    }
];

export default products;
