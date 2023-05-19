import { Form, Input } from "antd";
import { useState } from "react";
interface OtpFormProps {
  setShowOtpInput: (x: boolean)=>  void
}
const OtpFrom = ({ setShowOtpInput }: OtpFormProps) => {
  const [otp, setOtp] = useState("");

  const handleOTPInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setOtp(value);
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
        <i className="icon-back-login fa-sharp fa-solid fa-caret-left"></i> Quay
        lại
      </div>

      <Form className="form-login" name="basic">
        <div>
          <div>
            <p className="head">Nhập mã OTP</p>
            <Form.Item
              name="OTP"
              rules={[
                {
                  required: true,
                  message:
                    "Vui lòng nhập mã OTP đã gửi về tài khoản email đăng ký của bạn",
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
              Xác thực
            </button>
            <div className="resent-opt-ctn">
              <p>Bạn vẫn chưa nhận được?</p>
              <button
                className={"button-resent-otp"}
                // onClick={handleResendOtp}
              >
                Nhận lại mã OTP
              </button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default OtpFrom;