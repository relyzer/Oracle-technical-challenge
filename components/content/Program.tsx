import React, { useState, useEffect } from "react";
import Image from "next/image";

type Props = {
  key: string;
  programTitle: string;
  imageUrl: string;
};

const Program = ({ key, programTitle, imageUrl }: Props): JSX.Element => {
  const [src, setSrc] = useState(imageUrl);

  useEffect(() => {
    setSrc(imageUrl);
  }, [imageUrl]);

  return (
    <article className="" key={key}>
      <div className="relative h-60 w-40">
        <Image
          src={src}
          placeholder="blur"
          blurDataURL="/assets/anika-mikkelson-dWYjy9zIiF8-unsplash.jpg"
          onError={() => setSrc('/assets/404-error-g14381febb_640.png')}
          layout="fill"
        />
      </div>
      <h3 className="max-w-[10rem]">{programTitle}</h3>
    </article>
  );
};

export default Program;
