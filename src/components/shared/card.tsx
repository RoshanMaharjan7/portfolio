import { cn } from "@/lib/utils";
import React from "react";

interface CardProps {
  className?: string;
  parentClassName?: string;
  children: React.ReactNode;
}

const Card = ({ className = "", parentClassName, children }: CardProps) => {
  return (
    <div className={cn("border rounded-3xl p-2 bg-secondary-background", parentClassName)}>
      <div className={cn("border rounded-xl p-3 bg-background", className)}>
        {children}
      </div>
    </div>
  );
};

export default Card;
