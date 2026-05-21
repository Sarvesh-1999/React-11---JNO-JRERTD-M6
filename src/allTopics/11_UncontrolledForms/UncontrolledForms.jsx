import { useRef } from "react";

const UncontrolledForms = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    const newUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(newUser);

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <>
      <h1>Learn Uncontrolled Forms</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="email" 
        name="email" 
        id="email" 
        ref={emailRef} 
        />
        
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};
export default UncontrolledForms;
