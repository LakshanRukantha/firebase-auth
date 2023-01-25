import { useState, useEffect } from "react";
import { auth } from "./auth/Firebase";
import { SignInWithGoogle } from "./auth/Firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const SignOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      {user ? (
        <button onClick={SignOut}>SignOut</button>
      ) : (
        <button onClick={SignInWithGoogle}>SignIn With Google</button>
      )}
    </div>
  );
}

export default App;
