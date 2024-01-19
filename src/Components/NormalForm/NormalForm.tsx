import { FieldValues, FormProvider, useForm } from "react-hook-form";
import cn from "../../Utils/cn";
import Button from "../Ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { TNormalForm, signInSchema } from "./Validation";
import InputField from "./InputField";

const NormalForm = () => {
  const methods = useForm<TNormalForm>({ resolver: zodResolver(signInSchema) });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const double = true;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          "w-full mt-8 border border-r-gray-300 rounded-md shadow-md p-5 mx-auto",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
      >
        <div
          className={cn("grid md:grid-cols-2 gap-5 p-2", {
            "md:grid-cols-2": double,
          })}
        >
          <InputField />
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
          <div className="w-full max-w-md">
            <label className="block" htmlFor="email">
              Email:
            </label>
            <input
              type="text"
              placeholder="Enter Your Fucking Email"
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter Your Fucking Password"
              id="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          <div
            className={cn("grid grid-cols-1 justify-items-center gap-5 my-6", {
              "md:grid-cols-2": double,
            })}
          >
            <div className=" w-full max-w-md col-start-1 md:col-start-2">
              <Button variants="solid" className="w-full max-w-md md:w-fit">
                Click Me
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default NormalForm;
