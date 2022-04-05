import data from "../db.json";
import Card from "./Card";
const MainContent = () => {
  return (
    <main>
      {data.map((ele) => (
        <Card vacation={ele} />
      ))}
    </main>
  );
};

export default MainContent;
