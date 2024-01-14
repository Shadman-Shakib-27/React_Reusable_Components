// import MainLayout from "./Components/Layout/MainLayout";
import Button from "./Components/Ui/Button";
import Container from "./Components/Ui/Container";

function App() {
  return (
    <Container>
      <div className="flex h-screen w-full items-center justify-center">
        {/* <h1>This is h1</h1>
        <h2>This is h2</h2>
        <h3>This is h3</h3>
        <button className="btn btn-primary">Shadman</button>
      <button className="btn btn-danger">Shadman</button> */}
        {/* <div className="size-20 bg-red-500"></div> */}
        <Button className="" variants='ghost' />
      </div>
    </Container>
  );
}

export default App;
