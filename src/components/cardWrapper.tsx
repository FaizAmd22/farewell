import { useState, useEffect } from "react";
import useGoogleSheets from "../hooks/useGoogleSheet";
import Card from "./card";
import CardSkeleton from "./cardSkeleton";

const CardWrapper = () => {
  const [localData, setLocalData] = useState<any[]>([]);
  const { data, loading, error, refetch } = useGoogleSheets();

  useEffect(() => {
    if (data && data.length > 0) {
      setLocalData(data);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="mt-8 md:mt-10 lg:mt-12 columns-1 md:columns-2 lg:columns-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <CardSkeleton />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 bg-[#171717] rounded-xl text-[#ff6b6b] p-4 text-center">
        <p className="mb-2">Error: {error}</p>
        <button
          onClick={refetch}
          className="bg-[#333] text-white px-4 py-2 rounded-lg hover:bg-[#444]"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8 md:mt-10 lg:mt-12 columns-1 md:columns-2 lg:columns-4 gap-4">
      {localData.map((item, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <Card data={item} />
        </div>
      ))}
    </div>
  );
};

export default CardWrapper;
