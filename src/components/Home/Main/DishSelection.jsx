function DishSelection() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold dish__title">Choose Dishes</h1>
      <select className="flex p-2 bg-gray-800 justify-center items-center rounded-lg gap-2 border-2 border-solid border-gray-500 cursor-pointer dinein">
        <option value="Dine in">Dine in</option>
        <option value="To Go">To Go</option>
        <option value="None">None</option>
      </select>
      
    </div>
  );
}
export default DishSelection;
