import CardContainer from "./components/CardContainer";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="min-h-screen bg-red-50">
      <div className="p-6 md:p-10 lg:max-w-[1200px] lg:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-6">
          <div className="md:col-span-8 lg:col-span-8">
            <h1 className="text-xl font-bold mb-4 lg:mb-8">Desserts</h1>
            <CardContainer />
          </div>
          <div className="md:col-span-8 lg:col-span-4 lg:row-start-1 lg:row-end-auto lg:col-start-9">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
