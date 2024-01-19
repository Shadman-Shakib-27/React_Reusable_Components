// import MainLayout from "./Components/Layout/MainLayout";
// import { useState } from "react";
// import Button from "./Components/Ui/Button";
// import Modal from "./Components/Ui/Modal";
import { FieldValues, useForm } from "react-hook-form";
import NormalForm from "./Components/NormalForm/NormalForm";
import { Form, FormSection, FormSubmit } from "./Components/ReusableForm";
import Container from "./Components/Ui/Container";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter Your Fucking Name"
              id="name"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
}

export default App;

// const [modal, setModal] = useState(false);

// const handleModalChange = () => {
//   setModal((prev) => !prev);
// };
{
  /* <div className="relative flex h-screen w-full items-center justify-center">
        {/* <h1>This is h1</h1> */
}
{
  /* <h2>This is h2</h2> */
}
{
  /* <h3>This is h3</h3> */
}
{
  /* <button className="btn btn-primary">Shadman</button> */
}
{
  /* <button className="btn btn-danger">Shadman</button> */
}
{
  /* <div className="size-20 bg-red-500"></div> */
}
// <Button className="z-10" onClick={() => setModal((prev) => !prev)}>
//   Open Modal
// </Button>
// <Modal isOpen={modal} onClose={handleModalChange}>
//   <Modal.Header>
//     <Modal.CloseButton></Modal.CloseButton>
//   </Modal.Header>
//   <h1>This is Modal</h1>
// </Modal>
{
  /* </div>*/
}
