import "./App.css";
import { trpc } from "./trpc";

function App() {
  const { data: user } = trpc.user.details.useQuery();

  return (
    <>
      <div>
        <h3>Welcome Abord</h3>
        <h2>
          {user?.userDetails.nameFirst} {user?.userDetails.nameLast}
        </h2>
      </div>
    </>
  );
}

export default App;
