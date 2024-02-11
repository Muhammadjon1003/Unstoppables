const fetchProducts = async (url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("An error occurred during the fetch:", error);
  }
};

function get(item) {
  if (document.querySelector(item)) {
    return document.querySelector(item);
  } else {
    console.log(`${item} is not found!`);
  }
}

function getStorageItems(key) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
}

function addItemToStorage(id, key) {
  const liked = { id };
  const likes = getStorageItems(key);
  const existingItem = likes.find((product) => product.id === id);

  if (!existingItem) {
    likes.push(liked);
    localStorage.setItem(key, JSON.stringify(likes));
  }
}

function removeItemFromStorage(id, key) {
  const likes = getStorageItems(key);
  const updatedLikes = likes.filter((item) => item.id !== id);
  localStorage.setItem(key, JSON.stringify(updatedLikes));
}

const menuArray = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    rating: 4.12,

    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    category: ["men's clothing", "Акция"],
    discountPrice: 39.99,
    replyNumber: 219,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    rating: 4.32,

    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: ["men's clothing", "Акция"],
    discountPrice: 39.19,
    replyNumber: 229,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    rating: 4.81,

    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: ["men's clothing", "Акция"],
    discountPrice: 39.29,
    replyNumber: 29,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    rating: 4.22,

    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: ["men's clothing", "Акция"],
    discountPrice: 19.99,
    replyNumber: 212,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    rating: 2.82,

    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: ["jewelery", "Акция"],
    discountPrice: 19.99,
    replyNumber: 19,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    rating: 3.82,

    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: ["jewelery", "Акция"],
    discountPrice: 39.99,
    replyNumber: 219,
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    rating: 4.22,

    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: ["men's clothing", "Акция"],
    discountPrice: 29.99,
    replyNumber: 239,
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    rating: 4.2,

    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: ["jewelery", "Акция"],
    discountPrice: 31.99,
    replyNumber: 29,
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    rating: 4.42,

    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: ["electronics", "Акция"],
    discountPrice: 39.99,
    replyNumber: 219,
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },

  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    rating: 4.81,

    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: ["electronics", "Акция"],
    discountPrice: 32.99,
    replyNumber: 219,
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  },

  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    rating: 4.52,

    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: ["electronics", "Акция"],
    discountPrice: 39.99,
    replyNumber: 119,
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    rating: 2.82,

    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: ["electronics", "Акция"],
    discountPrice: 39.99,
    replyNumber: 219,
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    rating: 4.12,

    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: ["electronics", "Акция"],
    discountPrice: 39.99,
    replyNumber: 219,
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    rating: 4.22,

    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: ["electronics", "Акция"],
    discountPrice: 39.99,
    replyNumber: 21,
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    rating: 4.87,

    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: ["women's clothing", "Акция"],
    discountPrice: 39.99,
    replyNumber: 21,
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    rating: 1.82,

    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: ["women's clothing", "Акция"],
    discountPrice: 9.99,
    replyNumber: 39,
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    rating: 4.22,

    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: ["women's clothing", "Акция"],
    discountPrice: 39.9,
    replyNumber: 29,
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    rating: 3.82,

    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: ["women's clothing", "Акция"],
    discountPrice: 39.99,
    replyNumber: 219,
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    rating: 4.81,

    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: ["women's clothing", "Акция"],
    discountPrice: 39.99,
    replyNumber: 219,
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: ["women's clothing", "Акция"],
    discountPrice: 39.99,
    replyNumber: 219,
    rating: 4.12,

    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  },
  {
    id: 20,
    title:
      "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",

    url: "https://via.placeholder.com/600/8985dc",
    thumbnailUrl: "https://via.placeholder.com/150/8985dc",
  },
  {
    id: 21,
    title: "ad et natus qui",
    price: 475,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque id nisi commodi consequuntur asperiores!",
    rating: 4.52,

    image:
      "https://images.uzum.uz/cklotqjk9fq68304kta0/t_product_540_high.jpg#1707622468871",
    category: "electronics",
    discountPrice: 39.99,
    replyNumber: 219,
  },
  {
    id: 22,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    rating: 4.69,
    category: "smartphones",
    discountPrice: 39.99,
    replyNumber: 22,
    images: "https://cdn.dummyjson.com/product-images/1/1.jpg",
  },
  {
    id: 23,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    rating: 4.44,
    stock: 34,
    discountPrice: 31.99,
    replyNumber: 20,
    category: "smartphones",
    images: "https://cdn.dummyjson.com/product-images/2/1.jpg",
  },
  {
    id: 24,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    rating: 4.09,
    discountPrice: 19.99,
    replyNumber: 22,
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    images: "https://cdn.dummyjson.com/product-images/3/1.jpg",
  },
  {
    id: 25,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,

    rating: 4.3,
    discountPrice: 19.99,
    replyNumber: 22,
    category: "smartphones",
    images: "https://cdn.dummyjson.com/product-images/4/1.jpg",
  },
  {
    id: 26,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    rating: 4.09,
    discountPrice: 19.99,
    replyNumber: 22,
    category: "smartphones",
    images: "https://cdn.dummyjson.com/product-images/5/1.jpg",
  },
  {
    id: 27,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    rating: 4.57,
    discountPercentage: 11.02,
    discountPrice: 39.99,
    replyNumber: 22,
    images: "https://cdn.dummyjson.com/product-images/6/1.png",
  },
  {
    id: 28,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    rating: 4.25,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "laptops",
    images: "https://cdn.dummyjson.com/product-images/7/1.jpg",
  },
  {
    id: 29,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    rating: 4.43,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "laptops",
    images: "https://cdn.dummyjson.com/product-images/8/1.jpg",
  },
  {
    id: 30,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    rating: 4.54,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "laptops",
    images: "https://cdn.dummyjson.com/product-images/9/1.jpg",
  },
  {
    id: 31,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    rating: 4.43,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "laptops",
    images: "https://cdn.dummyjson.com/product-images/10/1.jpg",
  },
  {
    id: 32,
    title: "perfume Oil",
    description:
      "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    price: 13,
    rating: 4.26,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "fragrances",
    images: "https://cdn.dummyjson.com/product-images/11/1.jpg",
  },
  {
    id: 33,
    title: "Brown Perfume",
    description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    price: 40,
    rating: 4,
    discountPrice: 39.99,
    replyNumber: 12,
    category: "fragrances",
    images: "https://cdn.dummyjson.com/product-images/12/1.jpg",
  },
  {
    id: 34,
    title: "Fog Scent Xpressio Perfume",
    description:
      "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    price: 13,
    rating: 4.59,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "fragrances",
    images: "https://cdn.dummyjson.com/product-images/13/1.jpg",
  },
  {
    id: 35,
    title: "Non-Alcoholic Concentrated Perfume Oil",
    description:
      "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    price: 120,
    rating: 4.21,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "fragrances",
    images: "https://cdn.dummyjson.com/product-images/14/1.jpg",
  },
  {
    id: 36,
    title: "Eau De Perfume Spray",
    description:
      "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    price: 30,
    rating: 4.7,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "fragrances",
    images: "https://cdn.dummyjson.com/product-images/15/1.jpg",
  },
  {
    id: 37,
    title: "Hyaluronic Acid Serum",
    description:
      "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: 19,
    rating: 4.83,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "skincare",
    images: "https://cdn.dummyjson.com/product-images/16/1.png",
  },
  {
    id: 38,
    title: "Tree Oil 30ml",
    description:
      "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    price: 12,
    rating: 4.52,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "skincare",
    images: "https://cdn.dummyjson.com/product-images/17/1.jpg",
  },
  {
    id: 39,
    title: "Oil Free Moisturizer 100ml",
    description:
      "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    price: 40,
    rating: 1.82,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "skincare",
    images: "https://cdn.dummyjson.com/product-images/18/1.jpg",
  },
  {
    id: 40,
    title: "Skin Beauty Serum.",
    description:
      "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    price: 46,
    rating: 4.81,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "skincare",
    images: "https://cdn.dummyjson.com/product-images/19/1.jpg",
  },
  {
    id: 41,
    title: "Freckle Treatment Cream- 15gm",
    description:
      "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    price: 70,
    rating: 4.06,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "skincare",
    images: "https://cdn.dummyjson.com/product-images/20/1.jpg",
  },
  {
    id: 42,
    title: "- Daal Masoor 500 grams",
    description: "Fine quality Branded Product Keep in a cool and dry place",
    price: 20,
    rating: 4.12,
    discountPrice: 39.99,
    replyNumber: 22,
    images: "https://cdn.dummyjson.com/product-images/21/1.png",
  },
  {
    id: 43,
    title: "Elbow Macaroni - 400 gm",
    description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    price: 14,
    rating: 4.22,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "groceries",
    images: "https://cdn.dummyjson.com/product-images/22/1.jpg",
  },
  {
    id: 44,
    title: "Orange Essence Food Flavou",
    description:
      "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    price: 14,
    rating: 4.85,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "groceries",
    images: "https://cdn.dummyjson.com/product-images/23/1.jpg",
  },
  {
    id: 45,
    title: "cereals muesli fruit nuts",
    description:
      "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    price: 46,
    rating: 4.94,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "groceries",
    images: "https://cdn.dummyjson.com/product-images/24/1.jpg",
  },
  {
    id: 46,
    title: "Gulab Powder 50 Gram",
    description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    price: 70,
    rating: 4.87,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "groceries",
    images: "https://cdn.dummyjson.com/product-images/25/1.png",
  },
  {
    id: 47,
    title: "Plant Hanger For Home",
    description:
      "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    price: 41,
    rating: 4.08,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "home-decoration",
    images: "https://cdn.dummyjson.com/product-images/26/1.jpg",
  },
  {
    id: 48,
    title: "Flying Wooden Bird",
    description:
      "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    price: 51,
    rating: 4.41,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "home-decoration",
    images: "https://cdn.dummyjson.com/product-images/27/1.jpg",
  },
  {
    id: 49,
    title: "3D Embellishment Art Lamp",
    description:
      "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
    price: 20,
    rating: 4.82,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "home-decoration",
    images: "https://cdn.dummyjson.com/product-images/28/1.jpg",
  },
  {
    id: 50,
    title: "Handcraft Chinese style",
    description:
      "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
    price: 60,
    rating: 4.44,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "home-decoration",
    images: "https://cdn.dummyjson.com/product-images/29/1.jpg",
  },
  {
    id: 51,
    title: "Key Holder",
    description:
      "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    price: 30,
    rating: 4.92,
    discountPrice: 39.99,
    replyNumber: 22,
    category: "home-decoration",
    images: "https://cdn.dummyjson.com/product-images/30/1.jpg",
  },
];

export {
  fetchProducts,
  get,
  menuArray,
  getStorageItems,
  addItemToStorage,
  removeItemFromStorage,
};
