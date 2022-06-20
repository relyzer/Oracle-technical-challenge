import React, { useState, useEffect } from "react";
import Image from "next/image";

import PopUpModal from "./PopUpModal";

type Props = {
  id: string;
  programTitle: string;
  imageUrl: string;
  releaseYear: number;
  description: string;
};

const Program = ({
  id,
  programTitle,
  imageUrl,
  releaseYear,
  description,
}: Props): JSX.Element => {
  const [src, setSrc] = useState(imageUrl);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setSrc(imageUrl);
  }, [imageUrl]);

  const onClickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <article className="" key={id}>
      <div
        className="relative h-60 w-40"
        role="button"
        tabIndex={0}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
      >
        <Image
         className="-z-10"
          src={src}
          placeholder="blur"
          blurDataURL="/assets/anika-mikkelson-dWYjy9zIiF8-unsplash.jpg"
          onError={() => setSrc("/assets/404-error-g14381febb_640.png")}
          layout="fill"
        />
      </div>
      <h4 className="max-w-[10rem]">{programTitle}</h4>
      {isModalOpen && (
        <PopUpModal
          imageSrc={imageUrl}
          movieTitle={programTitle}
          releaseYear={releaseYear}
          description={description}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </article>
  );
};

export default Program;
