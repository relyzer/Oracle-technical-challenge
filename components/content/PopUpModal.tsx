import React, { useEffect, useState } from "react";
import Image from "next/image";

import TextLoader from "../loader/TextLoader";
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
      .finally(() => {
        setisFunFactLoading(false);
      });
  }, [releaseYear]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="modal-container z-10">
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-20"
        role="button"
        tabIndex={0}
        onClick={handleCloseModal}
        onKeyDown={handleCloseModal}
        aria-label="Close Modal"
      />
      <div className="modal z-30">
        <div className="w-full flex flex-row-reverse">
          <button
            className="w-7 h-7 bg-slate-300 rounded-full"
            type="button"
            onClick={handleCloseModal}
          >
            X
          </button>
        </div>
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
          <p className="text-center pb-2">Year of release: {releaseYear}</p>
          <p className="max-w-prose">{description}</p>
        </div>
        <div className="p-2">
          <h4 className="text-center font-bold underline underline-offset-1 pb-2">
            Fun fact about the year of release
          </h4>
          {/* Loading skeleton */}
          {isFunFactLoading && <TextLoader />}
          {/* Error display */}
          {!isFunFactLoading && funFactError && (
            <p className="max-w-prose">
              Uh oh! Unable to retrieve fun facts. <br />
            </p>
          )}
          {/* Loading done and fun fact retrieved display */}
          {!isFunFactLoading && funFact && (
            <p className="max-w-prose">{funFact}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;
