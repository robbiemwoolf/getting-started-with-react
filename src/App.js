
import './App.css';

function App() {
  const name = "Robbie";
  const url = "https://github.com/robbiemwoolf";
  const linkText = "GitHub profile";
  const element = (
    <p>
      {" "}
      Hey, Robbie! Go checkout your<a href={url}>{linkText}</a>.
    </p>
  );

  return element;
};

export default App;
