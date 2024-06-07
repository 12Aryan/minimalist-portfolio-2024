import React from "react";
import { BentoGrid, BentoGridItem } from "../BentoGrid/BentoGrid";
import { gridItemsData } from "@/data";
import { GridItemType } from "@/types/Types";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItemsData &&
          gridItemsData?.length > 0 &&
          gridItemsData?.map((item: GridItemType) => (
            <BentoGridItem
              id={item?.id}
              key={item?.id}
              title={item?.title}
              description={item?.description}
            />
          ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
