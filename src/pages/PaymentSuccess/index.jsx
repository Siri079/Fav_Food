import { Alert } from "../../components/elements/Alert";
const PaymentSuccess = () => {
    return (
        <div className="max-w-lg mx-auto p-4">
            <Alert variant="success">
                Your payment was successful
            </Alert>
            <p>We will deliver your order very soon.</p>
        </div>
    )
}

export default PaymentSuccess;
