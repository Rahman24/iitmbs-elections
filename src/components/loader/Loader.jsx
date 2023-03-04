import "./Loader.css";

const Loader = ({ loading, children }) => {
  return loading ? (
    <div className="loading">
      <div className="effect-1 effects"></div>
      <div className="effect-2 effects"></div>
      <div className="effect-3 effects"></div>
    </div>
  ) : (
    children
  );
};

export default Loader;
