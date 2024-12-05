import ProductCard from "@/components/ProductCard/ProductCard";
import ThemeButton from "@/components/ThemeButton/ThemeButton";
import ThemeHeaidng from "@/components/ThemeHeading/ThemeHeaidng";
import ThemeText from "@/components/ThemeText/ThemeText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <ThemeHeaidng fontWeight="font-semibold" letterSpacing="tracking-wider"
         className="leading-[48px] text-[48px]">Flash Sales</ThemeHeaidng>
        <ThemeText fontWeight="font-normal" className="leading-6">Home</ThemeText>
         <ThemeButton className="w-[234px] h-[56px]">
            <ThemeText fontWeight='font-medium' className='leading-6 text-[16px] text-[#FAFAFA]'>View All Products</ThemeText>

         </ThemeButton>
         <ThemeButton className="w-[159px] h-[56px] px-12 py-3">
            <ThemeText fontWeight='font-medium' className='leading-6 text-[16px] text-[#FAFAFA]'>View All</ThemeText>

         </ThemeButton>

         <ProductCard/>
      {/* </ThemeButton> */}
    </div>
  );
}
