import categories from "../../Categories";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "The field must contain at least 3 characters" })
    .max(50, { message: "The filed must not exceed 50 characters" }),
  amount: z
    .number({ invalid_type_error: "Enter an amount" })
    .min(0.01, { message: "Amount must be at least 0.01" }),
  category: z.enum(categories),
});
type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        <div className="mb-1">
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="label-form">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        <div className="mb-1">
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="label-form"></label>
        <select
          id="category"
          {...register("category")}
          name="category"
          className="form-select"
        >
          {categories.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
