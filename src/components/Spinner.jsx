import SpinnerGIF from "../assets/7kmF.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={SpinnerGIF}
        className="d-block m-auto"
        style={{ width: "200px" }}
      />
    </>
  );
};

export default Spinner;