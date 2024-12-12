import React, { ReactNode } from "react";
import { cn } from "../../lib/utilits";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div
            className={cn("max-w-[1280px]", className)}
            style={{
                marginLeft: "clamp(10px, 5%, 75px)",
                marginRight: "clamp(10px, 5%, 75px)",
                marginTop: "0 auto",
                marginBottom: "0 auto",
                display: "block",
                maxWidth: "1280px",
                marginInline: "auto",
            }}
        >
            {children}
        </div>
    );
};
