import React, { useEffect, useState } from "react";
import Image from "next/image";

import { NumbersFactResult } from "../../definition/interface";

type Props = {
  imageSrc: string;
  movieTitle: string;
  releaseYear: number;
  description: string;
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void;
};

const PopUpModal = ({
  imageSrc,
  movieTitle,
  releaseYear,
  description,
  setIsModalOpen,
}: Props): JSX.Element => {
  const [src, setSrc] = useState(imageSrc);
  const [funFact, setFunFact] = useState("");
  const [isFunFactLoading, setisFunFactLoading] = useState(true);
  const [funFactError, setFunFactError] = useState(null);

  useEffect(() => {
    setSrc(imageSrc);
  }, [imageSrc]);

  useEffect(() => {
    fetch(`http://numbersapi.com/${releaseYear}/year?json`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((result: NumbersFactResult) => {
        if (typeof result.text === "string") {
          setFunFact(result.text);
        }
      })
      .catch((error) => setFunFactError(error))
      .finally(() => setisFunFactLoading(false));
  }, [releaseYear]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="modal-container"
      role="button"
      tabIndex={0}
      onClick={handleCloseModal}
      onKeyDown={handleCloseModal}
    >
      <div className="modal">
        <div className="relative h-60 w-40 left-1/2 -translate-x-1/2">
          <Image
            src={src}
            placeholder="blur"
            blurDataURL="/assets/anika-mikkelson-dWYjy9zIiF8-unsplash.jpg"
            onError={() => setSrc("/assets/404-error-g14381febb_640.png")}
            layout="fill"
          />
        </div>
        <h3 className="text-center font-bold p-2">{movieTitle}</h3>
        <div className="p-2">
          <p className="text-center">Year of release: {releaseYear}</p>
          <p className="max-w-prose">{description}</p>
        </div>
        <div className="p-2">
          <h4 className="text-center font-bold underline underline-offset-1">
            Fun fact about the year of release{" "}
          </h4>
          {isFunFactLoading && (
            <p className="max-w-prose">Loading fun facts! Please wait...</p>
          )}
          {!funFactError ? (
            <p className="max-w-prose">{funFact}</p>
          ) : (
            <p className="max-w-prose">
              Uh oh! Unable to retrieve fun facts. <br />
              {`Reason: ${funFactError}`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;
