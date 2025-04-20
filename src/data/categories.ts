
export type Category = {
  id: number;
  name: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: 1,
    name: "Music",
    image: "/categories/music.jpg"
  },
  {
    id: 2,
    name: "Men's Fashion",
    image: "/categories/mens-fashion.jpg"
  },
  {
    id: 3,
    name: "Women's Fashion",
    image: "/categories/womens-fashion.jpg"
  },
  {
    id: 4,
    name: "Groceries",
    image: "/categories/groceries.jpg"
  },
  {
    id: 5,
    name: "Baby Products",
    image: "/categories/baby.jpg"
  },
  {
    id: 6,
    name: "Appliances",
    image: "/categories/appliances.jpg"
  }
];
