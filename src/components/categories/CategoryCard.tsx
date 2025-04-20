
import { Link } from "react-router-dom";
import { Category } from "@/data/categories";

type CategoryCardProps = {
  category: Category;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${category.id}`} className="block">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/300x200?text=Category+Image";
            }}
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl font-bold text-green-600">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
