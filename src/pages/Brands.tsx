
import Navbar from "@/components/layout/Navbar";
import BrandCard from "@/components/brands/BrandCard";
import { brands } from "@/data/brands";

const Brands = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">All Brands</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
