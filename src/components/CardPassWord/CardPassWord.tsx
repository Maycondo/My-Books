import "./cardPassWord.css";

interface CardPasswordProps {
  onClose: () => void;
  isOpen: boolean;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  inputPassword: string;
  setInputPassword: React.Dispatch<React.SetStateAction<string>>;
  passwordAdmin: string;
}

export default function CardPassword({ isOpen, onClose, submitted, setSubmitted, inputPassword, setInputPassword, passwordAdmin,
}: CardPasswordProps) {
    if (!isOpen) return null;

    const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputPassword.trim() === "") {
        alert("Password is required");
        return;
    }

    if (inputPassword === passwordAdmin) {
        setSubmitted(true); // permite exibir o CardBookAdd
    } else {
        alert("Password is incorrect");
        setSubmitted(false); // impede exibir o CardBookAdd
    }
    };


  return (
    <div className="painel_password">
      <div className="cardpassword">
        <div className="card_add_book">
          <button className="Button_" onClick={onClose}>
            <span className="X"></span>
            <span className="Y"></span>
            <div className="close">Close</div>
          </button>
        </div>
        <form className="Password_admin" onSubmit={handlePasswordChange}>
          <h1>Enter the password</h1>
          <input
            className={submitted && inputPassword.trim() === "" ? "input_password_error" : "input_password"}
            type="password"
            placeholder="Password admin"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          {submitted && inputPassword.trim() === "" && (
            <p className="error_password">Password is incorrect</p>
          )}
          <button type="submit" className="btn_password">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
