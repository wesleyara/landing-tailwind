export const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-screen-xl m-auto w-11/12	">
      <div className="flex items-center gap-10">
        <h2>snap</h2>
        <ul className="flex">
          <li className="p-5">
            <select className=" bg-transparent">
              <option value="features">Features</option>
              <option value="">Todo List</option>
            </select>
          </li>
          <li className="p-5">
            <select className="bg-transparent">
              <option disabled selected hidden value="company">
                Company
              </option>
              <option value="">History</option>
              <option value="">Our Team</option>
              <option value="">Blog</option>
            </select>
          </li>
          <li className="p-5">Careers</li>
          <li className="p-5">About</li>
        </ul>
      </div>

      <ul className="flex gap-5">
        <li className="p-2">Login</li>
        <li className="flex items-center pl-6 pr-6 border border-gray-700 rounded-2xl">
          Register
        </li>
      </ul>
    </header>
  );
};
