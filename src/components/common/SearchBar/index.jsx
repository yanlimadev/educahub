export default function SearchBar() {
  return (
    <div className="w-full">
      <form className="order-first w-auto flex flex-row items-end bg-blue-50 p-2.5 rounded-lg sticky t-5">
        <div className="flex flex-col">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" placeholder="Nome" className="p-2" />
        </div>
      </form>
    </div>
  );
}
