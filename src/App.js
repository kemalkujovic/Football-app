import classes from "./App.module.css";
import Navigation from "./Templates/Navigation";
function App() {
  return (
    <div className={classes.mainContainer}>
      <Navigation />
    </div>
  );
}

export default App;
