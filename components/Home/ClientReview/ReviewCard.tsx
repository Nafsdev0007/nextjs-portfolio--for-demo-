import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

type Props = {
  id: number;
  name: string;
  profession: string;
  userImage: string;
  review: string;
};

const ReviewCard = ({ id, name, profession, userImage, review }: Props) => {
  return (
    <div className="bg-white shadow-md dark:bg-gray-800 rounded-lg m-3 p-6 relative">
        <QuoteIcon className="size-8 absolute top-4 right-4 text-red-600 dark:text-yellow-300 opacity-20" />
        
        <div className="mt-6 flex items-center">
            <FaStar className="size-4 text-yellow-600 dark:text-yellow-300"/>
            <FaStar className="size-4 text-yellow-600 dark:text-yellow-300"/>
            <FaStar className="size-4 text-yellow-600 dark:text-yellow-300"/>
            <FaStar className="size-4 text-yellow-600 dark:text-yellow-300"/>
            <FaStar className="size-4 text-yellow-600 dark:text-yellow-300"/>
        </div>

        <p className="mt-6 text-base text-gray-600 dark:text-gray-300 font-semibold">{review}</p>

        <div className="w-full h-[1.2px] bg-gray-600 dark:bg-gray-300 opacity-10 my-6"></div>

        <div className="flex items-center space-x-4">
            <Image src={userImage} alt="name" width={50} height={50} className="rounded-full"/>
            <div className="">
                <h1 className="font-bold text-gray-800 dark:text-gray-200">{name}</h1>
                <p className="text-sm text-gray-500">{profession}</p>
            </div>
        </div>
    </div>
  );
};

export default ReviewCard;
