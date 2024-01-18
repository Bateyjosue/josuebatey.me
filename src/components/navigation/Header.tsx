import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white h-20 rounded-lg m-4">
      <ul className="flex items-center h-full">
        <li className="hover:bg-yellow-200 hover:text-white hover:rounded-lg h-full overflow-hidden">
          <NavLink to="/"
            className={
              isActive => "px-6 flex flex-col items-center justify-center " +
                (isActive
                  ? "border-b-4 border-yellow-500 rounded-s-lg h-full"
                  : 'bg-black')
            }>
              <span className="material-symbols-outlined text-black text-4xl">house</span>
            <span className="text-yellow-500 text-xs font-bold">Home</span>
          </NavLink>
        </li>
        <li className="hover:bg-yellow-200 hover:text-white hover:rounded-lg h-full overflow-hidden">
          <NavLink to="/"
            className={
              isActive => "px-6 flex flex-col items-center justify-center " +
                (isActive
                  ? "border-b-4 border-yellow-500 rounded-s-lg h-full"
                  : '')
            }>
              <span className="material-symbols-outlined text-black text-4xl">work</span>
            <span className="text-yellow-500 text-xs font-bold">Works</span>
          </NavLink>
        </li>

      </ul>
    </header>
  )
}
