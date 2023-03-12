import { React } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const localdata = JSON.parse(localStorage.getItem("studentdetails"));

  const onsubmit = (data) => {
    setData(data);

    if (data.password === localdata.password) {
      navigate("/");
    } else {
      setError(true);
    }
    console.log("formdata:", data);
    console.log("localdata:", localdata);
  };

  localStorage.setItem(
    "studentdetails",
    JSON.stringify({
      Username: "Devisri",
      password: "devi",
    })
  );

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onsubmit)}>
        <h2>Login Form</h2>
        <br></br>
        <img
          src="https://i.pinimg.com/736x/a5/0a/67/a50a6704336ade0fdb4b5a364df0b850.jpg"
          height="100"
          width="100"
        />
        <span></span> <br></br>
        <input
          type="text"
          placeholder="Enter Username"
          className="det"
          {...register("Username", {
            required: true,
            minLength: {
              value: 5,
              message: "*Enter valid Username",
            },
          })}
        /><br></br>
        <span style={{ color: "red" }}>{errors.Username?.message}</span>
        <br></br>
        <input
          type="password"
          placeholder="Enter Password"
          className="det"
          {...register("password", {
            required: true,
            min: {
              value: 1,
              message: "*address must be required",
            },
          })}
        />
        <span style={{ color: "red" }}>{errors.password?.message}</span>
        <br></br>
        {error ? (
          <span style={{ color: "red" }}>
            *Please Enter valid Username/Password
          </span>
        ) : (
          <span></span>
        )}
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
