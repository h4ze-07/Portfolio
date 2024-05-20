import { gridItems } from "../constants"
import { CustomGridItem } from "./ui/CustomGrid"

const GridSection = () => {
  return (
    <section className="mt-[60px] md:mt-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto lg:max-w-[1200px] px-[15px]">
            {gridItems.map((item) => (
                <CustomGridItem 
                    key={item.id} 
                    id={item.id} 
                    title={item.title}
                    subtitle={item.subtitle}
                    className={item.className}
                    img={item.img} 
                />
            ))}
        </div>
    </section>
  )
}

export default GridSection