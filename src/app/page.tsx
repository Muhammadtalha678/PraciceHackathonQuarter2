import SidebarLink from "@/components/SidebarLink/SidebarLink";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import banner from '../../public/assets/images/banner.png'
import SectionName from "@/components/SectionName/SectionName";
import ThemeHeaidng from "@/components/ThemeHeading/ThemeHeaidng";
import SectionSubName from "@/components/SectionSubName/SectionSubName";
import ThemeButton from "@/components/ThemeButton/ThemeButton";
import ThemeText from "@/components/ThemeText/ThemeText";
import ProductCard from "@/components/ProductCard/ProductCard";
export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <div className="grid grid-cols-4 w-10/12">
          sidebar
          <div className="col-span-1 items-center border-r-[0.5px] border-[#000]">
            <div className="flex flex-col gap-4 pt-10 pr-3">
              <SidebarLink icon={<MdKeyboardArrowRight size={24}/>} name="Woman’s Fashion"/>                  
              <SidebarLink icon={<MdKeyboardArrowRight size={24}/>} name="Men’s Fashion"/>                  
              <SidebarLink name="Electronics"/>                  
              <SidebarLink name="Home & Lifestyle"/>
              <SidebarLink name="Medicine "/>
              <SidebarLink name="Sports & Outdoor"/>
              <SidebarLink name="Baby’s & Toys"/>
              <SidebarLink name="Groceries & Pets"/>
              <SidebarLink name="Health & Beauty"/>
                                
            </div>
          </div>
        <div className="col-span-3 bg-slate-200 pt-10 flex justify-center">
          <Image src={banner} alt="Banner" className="ml-auto object-contain"/>  
        </div>
      </div> */}
      {/* flash sales section */}
      <div className="p-5 px-4 md:px-8 lg:px-12 xl:px-32 flex flex-col gap-4">
        {/* section higlight */}
        <SectionName name="Today's"/>
        {/* section name */}
        <SectionSubName includeTimerContent={true} heading="Flash Sales"/>
        
      </div>
      <div className="p-5 px-4 md:px-8 lg:px-12 xl:px-32 flex flex-col gap-4">
        {/* section higlight */}
        <SectionName name="Categories"/>
        {/* section name */}
        <SectionSubName includeTimerContent={false} heading="Best Selling Products"
          lastContent={<ThemeButton className="sm:px-12 sm:py-4 px-6 py-3"><ThemeText fontWeight="font-medium" className="text-white">View All</ThemeText></ThemeButton>}
        />
        <div className="grid grid-cols-4">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>

        </div>
      </div>
    </div>
  );
}
