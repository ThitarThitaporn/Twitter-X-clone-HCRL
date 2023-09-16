import { DotsHorizontalIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Trending() {
  return (
    <div className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center justify-between">
      <div className="space-y-0.5">
        <p className="text-[#6e767d] text-xs font-medium">
          T20 World Cup 2021 LIVE
        </p>
        <h6 className="font-bold max-w-[250px] text-sm">
          NZvAUS: New Zealand and Australia clash in the T20 World Cup final
        </h6>
        <p className="text-[#6e767d] text-xs font-medium max-w-[250px]">
          #T20WorldCupFinal Kane Williamson
        </p>
      </div>

      {/* รูปภาพ */}
      <Image
        src="https://rb.gy/d9yjtu"
        width={70}
        height={70}
        objectFit="cover"
        className="rounded-2xl"
      />

      {/* ไอคอน Dots Horizontal */}
      <div className="icon group">
        <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
      </div>
    </div>
  );
}

export default Trending;
