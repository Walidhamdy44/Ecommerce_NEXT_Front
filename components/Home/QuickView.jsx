import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import Link from "next/link";
import { MdViewInAr } from "react-icons/md";

const QuickView = ({ item }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <MdViewInAr />
        </DialogTrigger>
        <DialogContent className="w-[800px]">
          <DialogHeader>
            <DialogTitle>
              <div className="flex justify-between items-center">
                <p>
                  Quick View For {"   "}
                  <span className="text-[22px] font-extrabold text-red-600 ml-2">
                    {item.attributes.title}
                  </span>
                </p>
              </div>
            </DialogTitle>
            <DialogDescription>
              <div className="flex items-center gap-4 p-4">
                <div className="flex items-center gap-3 relative item-box-view flex-1">
                  <Image
                    src={item.attributes.coverImg.data.attributes.url}
                    width={290}
                    height={300}
                    alt="new colection"
                    style={{ maxHeight: "350px" }}
                  />
                </div>
                <div className="flex items-start gap-5 flex-col flex-1">
                  <div className="flex items-start gap-4 max-md:flex-col">
                    <h3 className="text-center capitalize text-[22px] flex-1">
                      {item.attributes.title}
                    </h3>
                    <span className="text-orange-400 text-[16px]">
                      $
                      <span className="text-[20px] font-extrabold">
                        {item.attributes.price}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-start gap-4 justify-between">
                    <div className="text-[14px] text-white w-fit py-[5px] px-[10px] rounded-xl bg-sky-400 ">
                      <Link
                        href={`/all-products?cat=${item.attributes.category}`}
                      >
                        {item.attributes.category}
                      </Link>
                    </div>
                    <div className="text-[14px] text-white w-fit py-[5px] px-[10px] rounded-xl bg-lime-500 ">
                      {item.attributes.badge}
                    </div>
                  </div>
                  <p className="text-[16px] text-[#999898] flex-1 max-h-[200px] overflow-y-scroll">
                    {item.attributes.desc}
                  </p>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuickView;
