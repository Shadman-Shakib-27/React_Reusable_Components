import { useForm } from "react-hook-form";
import cn from "../../Utils/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const double = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("border border-red-500 w-full p-5 mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn("border border-blue-500 grid md:grid-cols-2 gap-5 p-2", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-m">
          <label className="block" htmlFor="name">
            Name:{" "}
          </label>
          <input className="" type="text" id="name" {...register("name")} />
        </div>
        <div className="w-full max-w-m">
          <label className="block" htmlFor="name">
            Email:
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full max-w-m">
          <label className="block" htmlFor="name">
            Password:{" "}
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full max-w-m">
          <label className="block" htmlFor="name">
            Option:
          </label>
          <select>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
        </div>
        <div className="w-full max-w-m">
          <label className="block" htmlFor="name">
            Textarea:
          </label>
          <textarea></textarea>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
