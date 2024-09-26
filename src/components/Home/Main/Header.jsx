function Header() {
  const date = new Date();
  const week = date.toString().slice(0, 16);
  return (
    <div className="flex items-center justify-between main__header">
      <div>
        <h1 className="text-3xl font-bold main__title">Jaegar Resto</h1>
        <p className="date">{week}</p>
      </div>
      <div className="p-2 bg-gray-800 rounded-lg flex justify-center items-center gap-3 main__input">
        <i className="bi bi-search text-lg cursor-pointer"></i>
        <input
          type="text"
          className="bg-gray-800 outline-none"
          placeholder="Search for food, coffe, etc.."
        />
      </div>
    </div>
  );
}
export default Header;
