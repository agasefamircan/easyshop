import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import style from "../assets/css/loading.module.css";

const Loading = () => {
  return (
    <div className={`${style.ui_item} ui items`}>
      <div className="item">
        <div className="ui small image">
          <Skeleton height={150} width={150} />
        </div>
        <div className="content">
          <div className="header">
            <Skeleton height={20} width={150} />
          </div>
          <div className="meta">
            <Skeleton height={15} width={80} />
          </div>
          <div className="description">
            <Skeleton count={3} />
          </div>
        </div>
      </div>
      <div className="item">
        <div className="ui small image">
          <Skeleton height={150} width={150} />
        </div>
        <div className="content">
          <div className="header">
            <Skeleton height={20} width={150} />
          </div>
          <div className="meta">
            <Skeleton height={15} width={80} />
          </div>
          <div className="description">
            <Skeleton count={3} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loading;



export const LoadingProducts = () => {

  return (
    <div className={`${style.ui_itemPro} ui items`}>
      <div className="item">
        <div className="ui small image">
          <Skeleton height={250} width={150} />
        </div>
      </div>
      <div className="item">
        <div className="ui small image">
          <Skeleton height={250} width={150} />
        </div>
      </div>
      <div className="item">
        <div className="ui small image">
          <Skeleton height={250} width={150} />
        </div>
      </div>
      <div className="item">
        <div className="ui small image">
          <Skeleton height={250} width={150} />
        </div>
      </div>
      <div className="item">
        <div className="ui small image">
          <Skeleton height={250} width={150} />
        </div>
      </div>
    </div>
  );
};
