import { TbBeach } from "react-icons/tb";

export const LisitngCategorySinglePage = () => {
  return (
    <div className='flex flex-col gap-6'>
        <div className="flex flex-row items-center gap-4">
            <TbBeach size={40} className="text-neutral-600"/>
            <div className="flex flex-col">
                <div className="text-lg font-semibold">
                    Beach
                </div>
                <div className="text-neutral-500 font-light">
                    This property is close to the beach
                </div>
            </div>
        </div>
    </div>
  )
}
