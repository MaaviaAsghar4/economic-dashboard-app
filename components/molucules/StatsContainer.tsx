import React from "react";

interface StatsContainerProps {
  statsTitle: string;
  stats: string;
}

const StatsContainer = ({ statsTitle, stats }: StatsContainerProps) => {
  return (
    <div>
      <p className="text-xs">{statsTitle}</p>
      <h4 className="text-base font-medium">{stats}</h4>
    </div>
  );
};

export default StatsContainer;
