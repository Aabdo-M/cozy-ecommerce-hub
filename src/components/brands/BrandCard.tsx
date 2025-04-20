
import { Link } from "react-router-dom";
import { Brand } from "@/data/brands";

type BrandCardProps = {
  brand: Brand;
};

const BrandCard = ({ brand }: BrandCardProps) => {
  return (
    <Link to={`/brands/${brand.id}`} className="block">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="h-32 flex items-center justify-center">
          <img 
            src={brand.image} 
            alt={brand.name} 
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/200x100?text=Brand+Logo";
            }}
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-lg font-medium">{brand.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
