import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className="col-md-9 py-md-3">
      <div className="row">
        <div className="col-6 col-md-6 col-lg-4 mb-3">
          <Skeleton height={400} width={"100%"} />
        </div>
        <div className="col-6 col-md-6 col-lg-4 mb-3">
          <Skeleton height={400} width={"100%"} />
        </div>
        <div className="col-6 col-md-6 col-lg-4 mb-3">
          <Skeleton height={400} width={"100%"} />
        </div>
        <div className="col-6 col-md-6 col-lg-4 mb-3">
          <Skeleton height={400} width={"100%"} />
        </div>
        <div className="col-6 col-md-6 col-lg-4 mb-3">
          <Skeleton height={400} width={"100%"} />
        </div>
        <div className="col-6 col-md-6 col-lg-4 mb-3">
          <Skeleton height={400} width={"100%"} />
        </div>
        <div className="col-6 col-md-6 col-lg-4 mb-3">
          <Skeleton height={400} width={"100%"} />
        </div>
      </div>
    </div>
  );
};
export default Loading;