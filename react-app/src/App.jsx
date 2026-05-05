import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const username = "John Doe";
  
  function greet() {
    return "Welcome";
  }
  return (
    <>
      <Navbar />
      <h1>I am App Component (Parent)</h1>
      <h2>
        {greet()} {username}
      </h2>
      <Footer />
    </>
  );
};

export default App;
