import Child1 from "./Child1";

const Parent1 = () => {
  let data1 = "Hiii";
  let data2 = [10, 20, 30];
  let data3 = { name: "John" };
  return (
    <>
      <h1>Parent Component</h1>
      <Child1 prop1={data1} prop2={data2} prop3={data3} />
    </>
  );
};

export default Parent1;
