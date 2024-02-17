// CarouselBackground.tsx
interface CarouselBackgroundProps {
    children: React.ReactNode;
    id?: string;
    'data-testId'?: string;
    className?: string;
  }
  
  const CarouselBackground: React.FC<CarouselBackgroundProps> = ({ children, ...props }) => (
    <div className="px-2 py-2 mx-2 my-2 bg-white rounded-2xl shadow-lg bg-opacity-30 backdrop-blur-sm" {...props}>
      {children}
    </div>
  );
  
  export default CarouselBackground;