import classes from "./App.module.css";
import Main from "./Templates/Main/Main";
import Navigation from "./Templates/Navigation/Navigation";
function App() {
  return (
    <div className={classes.mainContainer}>
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
