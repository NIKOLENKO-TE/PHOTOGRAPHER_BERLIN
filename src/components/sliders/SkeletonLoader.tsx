// SkeletonLoader.tsx
import React from "react";

interface SkeletonLoaderProps {
    className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ className }) => {
    return (
        <div className={`animate-pulse bg-gray-300 ${className}`}>
            {/* Пустой div для отображения скелетон-лоадера */}
        </div>
    );
};

export default SkeletonLoader;
