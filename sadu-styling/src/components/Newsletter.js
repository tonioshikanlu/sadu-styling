import MailchimpSubscribe from "react-mailchimp-subscribe";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = (event) => {
    event.preventDefault();
  
    if (email && email.value.indexOf("@") > -1) {
      onValidated({
        EMAIL: email.value
      });
      email.value = ""; 
    }
  };

  if (status === "sending") {
    toast.info("Sending...");
  } else if (status === "error") {
    toast.error(message);
  } else if (status === "success") {
    toast.success("Subscribed !");
  }

  return (
    <form onSubmit={submit}>
      <h1 style={{ color: 'white' }}>Join our newsletter!</h1>
      <input
        ref={node => (email = node)}
        type="email"
        placeholder="Enter your email address here"
        style={{
          padding: "10px",
          fontSize: "16px",
          border: "2px solid #ddd",
          borderRadius: "5px",
        }}
      />
      <button
        type="submit"
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "#5b6e6b",
          border: "none",
          color: "white",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>
    </form>
  );
};

const Newsletter = () => (
  <div>
    <MailchimpSubscribe
      url={process.env.REACT_APP_MAILCHIMP_URL}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
    <ToastContainer />
  </div>
);

export default Newsletter;