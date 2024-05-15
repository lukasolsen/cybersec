import { FieldError, UseFormRegister } from "react-hook-form";

type FormFieldProps = {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg p-2 mb-2 dark:bg-gray-800 dark:text-gray-200"
      {...register(name, { valueAsNumber })}
    />
    {error && (
      <span className="text-red-500 font-semibold">{error.message}</span>
    )}
  </>
);
export default FormField;
