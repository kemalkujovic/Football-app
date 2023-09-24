import classes from "./App.module.css";
import Navigation from "./Templates/Navigation/Navigation";
function App() {
  return (
    <div className={classes.mainContainer}>
      <Navigation />
    </div>
  );
}

export default App;
