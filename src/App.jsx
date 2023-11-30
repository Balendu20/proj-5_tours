import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isloading, setisLoading] = useState(true);
  const [data, setdata] = useState([]);

  const removeTour = (id) => {
    const newtour = data.filter((tour) => tour.id !== id);
    setdata(newtour);
  };

  const fetchTours = async () => {
    setisLoading(true);
    try {
      const respo = await fetch(url);
      const data = await respo.json();
      setdata(data);
    } catch (error) {
      console.log(error);
    }
    setisLoading(false);
  };

  useState(() => {
    fetchTours();
  }, []);

  if (isloading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (data.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Available</h2>
          <button type="button" className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours data={data} removeTour={removeTour} />
    </main>
  );
};
export default App;
