import React from "react";

/**
 * Text loading skeleton to display loading status.
 */
const TextLoader = (): JSX.Element => {
  return (
    <div>
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-300 rounded" />
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-2 bg-slate-300 rounded col-span-1" />
              <div className="h-2 bg-slate-300 rounded col-span-1" />
            </div>
            <div className="h-2 bg-slate-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextLoader;
