import { useCallback } from "react";
import Tour from "./Tour";

const Tours = ({ data, removeTour }) => {
  const handleClick = useCallback(() => {
    //fefe
    Object.is();
  }, []);
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {data.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
