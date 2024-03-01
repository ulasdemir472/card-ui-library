import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type CardProps = {
  title: string;
  description: string;
  cardClassname?: string | string[];
  titleClassname?: string | string[];
  descriptionClassname?: string | string[];
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  cardClassname,
  titleClassname,
  descriptionClassname,
}) => {
  return (
    <div
      id="card"
      className={cn(
        "flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700",
        cardClassname
      )}
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="https://flowbite.com/docs/images/blog/image-4.jpg"
        alt="image"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5
          className={cn(
            "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
            titleClassname
          )}
        >
          {title}
        </h5>
        <p
          className={cn(
            "mb-3 font-normal text-gray-700 dark:text-gray-400",
            descriptionClassname
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
