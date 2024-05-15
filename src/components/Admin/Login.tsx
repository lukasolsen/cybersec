import { useForm } from "react-hook-form";
import FormField from "../../components/FormField";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../utils/axios";

const Schema = zod.object({
  email: zod.string().email(),
  password: zod
    .string()
    .min(4, { message: "Password must be at least 4 characters" })
    .max(200, { message: "Password must be less than 200 characters" }),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Schema),
  });

  const onSubmit = async (data: FormData) => {
    const response = await api.post("/users/login", data);

    if (response.status === 200) {
      document.cookie = `jwt=${response.data.token}`;
      window.location.reload();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid col-auto">
        <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
        <FormField
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />

        <FormField
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
