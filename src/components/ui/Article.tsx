import React from 'react';
import Image from 'next/image';
import ReadMoreButton from './ReadMoreButton';
import { cva, type VariantProps } from 'class-variance-authority';

const textStyles = cva('', {
  variants: {
    textColor: {
      blue: 'text-blue',
      green: 'text-green',
      pink: 'text-pink',
      white: 'text-white',
    },
    size: {
      content: 'font-chakrapetch text-xs sm:text-base md:text-lg lg:text-lg',
      header: 'font-vt323 text-xl sm:text-2xl md:text-3xl lg:text-4xl',
    },
  },
  defaultVariants: {
    textColor: 'blue',
  },
});

const borderStyles = cva('', {
  variants: {
    borderColor: {
      blue: 'border-blue',
      green: 'border-green',
      pink: 'border-pink',
      white: 'border-white',
    },
    borderDirection: {
      all: 'border-2 md:border-4',
      right: 'border-r-2 md:border-r-4',
    },
  },
});

interface ArticleProps
  extends VariantProps<typeof textStyles>,
  VariantProps<typeof borderStyles> {
  imageUrl: string;
  title: string;
  content: string;
  borderColor: 'blue' | 'green' | 'pink' | 'white';
  headerColor: 'blue' | 'green' | 'pink' | 'white';
  textColor: 'blue' | 'green' | 'pink' | 'white';
  buttonTextColor: 'blue' | 'green' | 'pink' | 'white';
  url: string;
}

export default function Component({
  imageUrl,
  title,
  content,
  borderColor,
  headerColor,
  textColor,
  buttonTextColor,
  url,
}: ArticleProps) {
  return (
    <div
      className={`flex w-full max-w-4xl ${borderStyles({
        borderDirection: 'all',
        borderColor,
      })}`}
    >
      <div
        className={`w-7/12 relative aspect-[4/3] ${borderStyles({
          borderColor,
          borderDirection: 'right',
        })}`}
      >
        <Image
          src={`/images/sports-picture/${imageUrl}`}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="w-5/12 flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6">
          <h2
            className={`${textStyles({
              textColor: headerColor,
              size: 'header',
            })} mb-1 sm:mb-2 md:mb-3 leading-none`}
          >
            {title}
          </h2>
          <p
            className={`${textStyles({ textColor, size: 'content' })} 
            line-clamp-5 overflow-hidden`}
          >
            {content}
          </p>
        </div>
        <div className="self-end">
          <ReadMoreButton
            bgColor={borderColor}
            textColor={buttonTextColor}
            size="responsive"
            url={url}
          />
        </div>
      </div>
    </div>
  );
}
