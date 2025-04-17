import React, { FC, useState } from "react";

interface Props {
  user: string;
}

export const Avatar: FC<Props> = ({ user }) => {
  const [color, setColor] = useState<string>("#8f8f8f");

  const userInitial = user.split("", 1);

  const colorPalette = [
    {
      name: "violet",
      tints: ["#DDD6FE", "#C4B5FD", "#A78BFA", "#8B5CF6", "#7C3AED", "#6D28D9"],
    },
    {
      name: "blue",
      tints: ["#BFDBFE", "#93C5FD", "#60A5FA", "#3B82F6", "#2563EB", "#1D4ED8"],
    },
    {
      name: "green",
      tints: ["#A7F3D0", "#6EE7B7", "#34D399", "#10B981", "#059669", "#047857"],
    },
    {
      name: "orange",
      tints: ["#FED7AA", "#FDBA74", "#FB923C", "#F97316", "#EA580C", "#C2410C"],
    },

    {
      name: "red",
      tints: ["#FECACA", "#FCA5A5", "#F87171", "#EF4444", "#DC2626", "#B91C1C"],
    },
  ];

  return (
    <div className="absolute z-10 top-0 p-8 h-[500px] w-[500px] bg-light-blue rounded-[23px] flex flex-col items-center">
      <h1 className="py-4">Choose the color for your avatar</h1>
      <div
        className="rounded-full h-[60px] w-[60px] relative"
        style={{ backgroundColor: color }}
      >
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
          {userInitial}
        </p>
      </div>
      <div className="pt-4">
        {colorPalette.map((color) => (
          <div key={color.name} className="flex flex-row gap-2 flex-wrap pb-2">
            {color.tints.map((hex) => (
              <div
                className="rounded-full h-[50px] w-[50px] cursor-pointer"
                style={{ backgroundColor: hex }}
                onClick={() => setColor(hex)}
                key={hex}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
