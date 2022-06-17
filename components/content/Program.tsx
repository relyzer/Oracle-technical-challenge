import React, { useState, useEffect } from "react";
import Image from "next/image";

import PopUpModal from "./PopUpModal";

type Props = {
  key: string;
  programTitle: string;
  imageUrl: string;
  releaseYear: number;
  description: string;
};

const Program = ({
  key,
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
    <article className="" key={key}>
      <div
        className="relative h-60 w-40"
        role="button"
        tabIndex={0}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
      >
        <Image
          src={src}
          placeholder="blur"
          blurDataURL="/assets/anika-mikkelson-dWYjy9zIiF8-unsplash.jpg"
          onError={() => setSrc("/assets/404-error-g14381febb_640.png")}
          layout="fill"
        />
      </div>
      <h3 className="max-w-[10rem]">{programTitle}</h3>
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
