import { data } from "../data";
import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((item) => {
        return <Card key={item.id} product={item} />;
      })}
    </div>
  );
};

export default CardContainer;
