// import React, { useReducer } from "react";
// import {
//   setLoading,
//   setShowpassword,
//   setUsernameError,
//   setPasswordError,
// } from "../ReduxConnection/LoginAction.jsx";
// import { Redirect } from "react-router-dom";
// import * as Yup from "yup";
// import { loginUser } from "../Services/UserServices";
// import LoginForm from "../Component/LoginForm";
// import LoginReducer, { initialState } from "../ReduxConnection/LoginReducer";

// const LoginContainer = () => {
//   const [state, dispatch] = useReducer(LoginReducer, initialState);
//   // const loginDetails = { userEmail, password };
//   const { userEmail, password, loading, usernameError, passwordError } = state;
//   const validationSchema = Yup.object().shape({
//     userEmail: Yup.string().email().required("Required"),
//     password: Yup.string()
//       .required("Required")
//       .min(
//         8,
//         "Password is too short - should be 8 chars minimum and must contain numbers."
//       ),
//   });

//   const loginData = { userEmail, password };

//   const validateData = () => {
//     validationSchema
//       .validate({ loginData }, { abortEarly: false })
//       .then(() => {
//         setLoading(true);
//         console.log(loading);
//         //dispatch(setLogin(true));
//         // event.preventDefault();
//         console.log("login", loading);
//         const loginData = { userEmail, password };

//         loginUser(loginData)
//           .then((response) => {
//             console.log(response);
//             console.log("data", response.data.data);
//             // props.add(response.data.data);
//             localStorage.setItem("token", response.data.message);
//             alert(`Login Successfully`);
//             console.log(localStorage.token);
//           })
//           .catch((error) => {
//             console.log(error);
//             alert(`Login Failed`);
//           });
//       })
//       .catch((error) => {
//         error.inner.forEach((ele) => {
//           if (ele.path === "userEmail") {
//             setUsernameError(ele.message);
//             console.log(usernameError);
//           }
//           if (ele.path === "password") setPasswordError(ele.message);
//         });
//       });
//   };

//   if (localStorage.token === null) {
//     // history.push("/headerbar");
//     return <Redirect to="/headerbar" />;
//   }

//   return (
//     <LoginForm state={state} dispatch={dispatch} validateData={validateData} />
//   );
// };

// export default LoginContainer;

// // LoginComponent.prototype = {
// //   username: PropsTypes.string.isRequired,
// //   password: PropsTypes.string.isRequired,
// //   setUsername: PropsTypes.func.isRequired,
// //   setPassword: PropsTypes.func.isRequired,
// // };
