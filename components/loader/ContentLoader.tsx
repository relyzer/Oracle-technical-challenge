import React from "react";

/**
 * Content loading skeleton to display loading status.
 */

const ContentLoader = (): JSX.Element => {
  return (
    <div className="animate-pulse w-full h-[80vh] flex justify-center items-center">
      <div className="flex flex-row w-full h-4/5 justify-center px-32 py-4 gap-6">
        <div className="flex-1 flex flex-col space-y-8">
          <div className="py-24 bg-slate-300 rounded" />
          <div className="py-4 bg-slate-300 rounded" />
          <div className="py-4 bg-slate-300 rounded" />
        </div>
        <div className="flex-1 flex flex-col space-y-8">
          <div className="py-24 bg-slate-300 rounded" />
          <div className="py-4 bg-slate-300 rounded" />
          <div className="py-4 bg-slate-300 rounded" />
        </div>
        <div className="flex-1 flex flex-col space-y-8">
          <div className="py-24 bg-slate-300 rounded" />
          <div className="py-4 bg-slate-300 rounded" />
          <div className="py-4 bg-slate-300 rounded" />
        </div>
        <div className="flex-1 flex flex-col space-y-8">
          <div className="py-24 bg-slate-300 rounded" />
          <div className="py-4 bg-slate-300 rounded" />
          <div className="py-4 bg-slate-300 rounded" />
        </div>
        <div className="flex-1 flex flex-col space-y-8">
          <div className="py-24 bg-slate-300 rounded" />
          <div className="py-4 bg-slate-300 rounded" />
          <div className="py-4 bg-slate-300 rounded" />
        </div>
        <div className="flex-1 flex flex-col space-y-8">
          <div className="py-24 bg-slate-300 rounded" />
          <div className="py-4 bg-slate-300 rounded" />
          <div className="py-4 bg-slate-300 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ContentLoader;
