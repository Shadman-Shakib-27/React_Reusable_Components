import { useFormContext } from "react-hook-form";

const InputField = () => {
  const { register } = useFormContext();
  return (
    <div>
      <input type="text" {...register} />
    </div>
  );
};

export default InputField;
