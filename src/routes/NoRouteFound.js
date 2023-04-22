import { useNavigate } from "react-router-dom";
import Error from '../assets/Error.svg'

export const NoRouteFound = () => {
  const navigate = useNavigate();
  const GoToHomepageHandler = () => {
    navigate("/", {replace: true});
  };

  return (
    <>
      <div className="grid grid-cols-1 text-center text-white py-36">
        <img className="w-full h-[50vh]" src={Error} alt='Error' />
        <button
          className="p-2 text-white hover:bg-white hover:text-navblue w-fit justify-self-center rounded-lg"
          onClick={GoToHomepageHandler}
        >
          Go To Homepage
        </button>
      </div>
    </>
  );
};
