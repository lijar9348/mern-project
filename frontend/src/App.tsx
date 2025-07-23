import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { trpc } from "./trpc";

function App() {
  const { data: user } = trpc.user.details.useQuery();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        {user?.userDetails.nameFirst} {user?.userDetails.nameLast}
      </div>
    </>
  );
}

export default App;
