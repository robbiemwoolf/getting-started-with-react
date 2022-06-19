import './App.css';
import WelcomeBack from './WelcomeBack.js'

function App() {
  return (
    <>
      <WelcomeBack name="Joe" adjective="funny" />
      <WelcomeBack name="Anna" adjective="clever" />
      <WelcomeBack />
    </>
  );
};

export default App;
