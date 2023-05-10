package dtu.capstone_2.backend.payload.response;

public class RegisterResponse {

    private String messageSuccess = "User registered successfully!";

    private String token;

    public String getMessageSuccess() {
        return messageSuccess;
    }

    public void setMessageSuccess(String messageSuccess) {
        this.messageSuccess = messageSuccess;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public RegisterResponse(String messageSuccess, String token) {
        this.messageSuccess = messageSuccess;
        this.token = token;
    }

    public RegisterResponse(String token) {
        this.token = token;
    }
}
