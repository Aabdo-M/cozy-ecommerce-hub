
export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  currency: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Woman Shawl - Floral Pattern",
    description: "Beautiful floral pattern shawl for women, perfect for any occasion.",
    image: "/products/shawl-1.jpg",
    price: 191,
    category: "Women's Fashion",
    brand: "Fashion Elegance",
    rating: 4.8,
    currency: "EGP"
  },
  {
    id: 2,
    title: "Woman Shawl - Abstract Design",
    description: "Colorful abstract pattern shawl with vibrant colors and soft fabric.",
    image: "/products/shawl-2.jpg",
    price: 149,
    category: "Women's Fashion",
    brand: "StyleCraft",
    rating: 4.8,
    currency: "EGP"
  },
  {
    id: 3,
    title: "Woman Shawl - Geometric Pattern",
    description: "Modern geometric pattern shawl with bright orange and blue design.",
    image: "/products/shawl-3.jpg",
    price: 149,
    category: "Women's Fashion",
    brand: "Modern Textiles",
    rating: 4.8,
    currency: "EGP"
  },
  {
    id: 4,
    title: "Woman Shawl - Premium Design",
    description: "Premium quality shawl with elegant purple and white pattern.",
    image: "/products/shawl-4.jpg",
    price: 149,
    category: "Women's Fashion",
    brand: "Luxe Fabrics",
    rating: 4.8,
    currency: "EGP"
  },
  {
    id: 5,
    title: "Classic Acoustic Guitar",
    description: "Professional acoustic guitar with rich sound and solid wood construction.",
    image: "/products/guitar.jpg",
    price: 1299,
    category: "Music",
    brand: "SoundMaster",
    rating: 4.7,
    currency: "EGP"
  },
  {
    id: 6,
    title: "Nike Men's Hoodie",
    description: "Comfortable Nike hoodie for men with classic swoosh logo.",
    image: "/products/hoodie.jpg",
    price: 499,
    category: "Men's Fashion",
    brand: "Nike",
    rating: 4.9,
    currency: "EGP"
  },
  {
    id: 7,
    title: "Women's Summer Dress",
    description: "Beautiful floral pattern summer dress for women.",
    image: "/products/dress.jpg",
    price: 349,
    category: "Women's Fashion",
    brand: "Summer Style",
    rating: 4.6,
    currency: "EGP"
  },
  {
    id: 8,
    title: "Coffee Machine",
    description: "Automatic coffee machine for premium coffee experience.",
    image: "/products/coffee.jpg",
    price: 2499,
    category: "Appliances",
    brand: "SONY",
    rating: 4.9,
    currency: "EGP"
  }
];
