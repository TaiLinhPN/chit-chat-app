import { Form, Input } from "antd";
import { useState } from "react";
import { resendOtpApi, verifyOtpApi } from "../../api/authApi";
import { messageError, messageSuccess } from "../../utils/notifi";
interface OtpFormProps {
  email: string ;
  setShowOtpInput: (x: boolean) => void;
  setIsSignUp: (x: boolean) => void;
}
const OtpFrom = ({ setShowOtpInput, setIsSignUp, email }: OtpFormProps) => {
  const [otp, setOtp] = useState("");

  const handleOTPInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setOtp(value);
  };

  const handleOtpVerification = async () => {
    try {
      const response = await verifyOtpApi({ email, otp });
      if (response.status === 200) {
        messageSuccess("Verify OTP successful");
        setOtp("");
        setIsSignUp(false);
        setShowOtpInput(false);
      }
    } catch (error) {
      console.log(error);
      messageError(error);
    }
    // console.log("sfsdf");
    // verifyOtpRegister({ email: user.email, otp }, navigate);
  };

  const handleResendOtp = async () => {
     console.log('work?');
     
     try {
       const response = await resendOtpApi({email});
       if (response.status === 200) {
         messageSuccess(response.data.message);
       }
     } catch (error) {
       console.log(error);
       messageError(error);
     }
   };

  return (
    <>
      <div
        className={"btn-popt-back"}
        onClick={() => {
          setShowOtpInput(false);
          setOtp("");
        }}
      >
        <i className="icon-back-login fa-sharp fa-solid fa-caret-left"></i> Go
        back
      </div>

      <Form
        className="form-login"
        name="basic"
        onFinish={handleOtpVerification}
      >
        <div>
          <div>
            <p className="head">OTP Code</p>
            <Form.Item
              name="OTP"
              rules={[
                {
                  required: true,
                  message:
                    "Please enter the OTP sent to your registered email account",
                },
              ]}
            >
              <Input.Password
                name="otp"
                value={otp}
                onChange={handleOTPInputChange}
              />
            </Form.Item>
          </div>
        </div>

        <div>
          <div>
            <button
              className={"button-otp"}
              // onClick={handleOtpVerification}
            >
              Confirm
            </button>
          </div>
        </div>
      </Form>
      <div className="resent-opt-ctn">
        <p>Haven't received the OTP yet?</p>
        <button
          className={"button-resent-otp"}
          onClick={handleResendOtp}
        >
          Get code again
        </button>
      </div>
    </>
  );
};

export default OtpFrom;
