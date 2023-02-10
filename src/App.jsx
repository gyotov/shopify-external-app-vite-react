import { NavLink, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import "./styles/App.css";

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob("./pages/*.jsx", { eager: true });

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: pages[path].default,
  };
});

export function App() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <aside className="menu">
              <p className="menu-label">Navigation</p>
              <ul className="menu-list">
                {routes.map(({ name, path }) => (
                  <li key={path}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "is-active" : undefined
                      }
                      to={path}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="column">
            <Routes>
              {routes.map(({ path, component: RouteComp }) => (
                <Route key={path} path={path} element={<RouteComp />}></Route>
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}
