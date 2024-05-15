import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormField from "../FormField";
import { api } from "../../utils/axios";
import zod from "zod";
import { FaPaperPlane } from "react-icons/fa";

const Schema = zod.object({
  name: zod.string().min(4),
  text: zod.string().min(4).max(2000),
});

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Schema),
  });

  const onSubmit = async (data: FormData) => {
    const response = await api.post("/messages/send", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid col-auto">
        <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
        <FormField
          type="name"
          placeholder="Name"
          name="name"
          register={register}
          error={errors.name}
        />

        <FormField
          type="text"
          placeholder="Hello, I would like to get in touch with you about..."
          name="text"
          register={register}
          error={errors.text}
        />

        <button
          type="submit"
          className="flex flex-row items-center gap-4 border rounded-lg border-teal-800 justify-center p-2 hover:bg-teal-900 duration-100 transition-colors text-white"
        >
          Send <FaPaperPlane />
        </button>
      </div>
    </form>
  );
};
