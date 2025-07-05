import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    alert("Login successful!");
    console.log(data);
  };

  return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 w-full max-w-md space-y-4 bg-white dark:bg-gray-800 rounded shadow"
    >
      <h2 className="text-xl font-bold">🔐 Login Form</h2>

      <div>
        <label>Email:</label>
        <input
          className="border p-2 w-full rounded"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format"
            }
          })}
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          className="border p-2 w-full rounded"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          })}
        />
        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full p-2 rounded text-white ${
          isValid ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Login
      </button>
    </form>
  </div>
);

}

export default LoginForm;
