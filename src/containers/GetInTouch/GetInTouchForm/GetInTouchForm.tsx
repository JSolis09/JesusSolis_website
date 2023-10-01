import { useMutation } from "@apollo/client";
import { FC, useState, FormEvent, useCallback, useMemo } from "react";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

import { SEND_MESSAGE } from "../../../graphql/queries/sendEmail";
import { SendMessageData, SendMessageInput } from "../../../models";

import Button from "../../../components/Button";
import FormControl from "../../../components/FormControl";


interface GetInTouchFormProps {
    disabled?: boolean;
    showCaptcha?: boolean;
}
const GetInTouchForm: FC<GetInTouchFormProps> = ({ disabled, showCaptcha }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sendMessage, { loading }] = useMutation<SendMessageData, SendMessageInput>(SEND_MESSAGE);
    const [alert, setAlert] = useState({ show: false, msg: '', error: false });
    const [token, setToken] = useState<string>("");
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

    const buttonDisabled = useMemo(() => (loading || !name || !email || !message), [loading, name, email, message]);
    const showAlert = (msg: string, show: boolean, error: boolean) => {
        setAlert({ msg, show, error });
        setTimeout(() => setAlert({ msg: '', show: false, error: false }), 3000);
    };

    const handleChange = (ev: FormEvent<HTMLInputElement>) => {
        const value = ev?.currentTarget?.value;
        switch(ev?.currentTarget?.name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'message':
                return setMessage(value);    
        }
    }

    const onVerify =  useCallback((token: string) => {
        setToken(token);
    }, []);

    const cleanForm = () => {
        setName("");
        setEmail("");
        setMessage("");
    }

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        if (buttonDisabled) {
            return;
        }
        sendMessage({
            variables: {
                input: {
                    captcha: token,
                    name,
                    message,
                    email,
                }
            },
            onCompleted(response) {
                const msg = response?.getInTouch?.success 
                    ? 'Form successfully submitted.'
                    : response?.getInTouch?.error ||  'Oops! Something went wrong';
                showAlert(msg, true, false);
                cleanForm();
                setRefreshReCaptcha(r => !r);
            },
            onError() {
                showAlert('Oops! Something went wrong', true, true);
                setRefreshReCaptcha(r => !r);
            },
        });
    }

    return (
        <form
            name="getInTouchForm"
            noValidate={false}
            onSubmit={handleSubmit}
        >
            <fieldset className="js-getInTouch__form" disabled={disabled}>
                <FormControl
                    inputProps={{
                        id: 'name',
                        type: 'text',
                        name: 'name',
                        tag: 'input',
                        value: name,
                        onChange: handleChange,
                        autoComplete: 'on',
                    }}
                    labelProps={{
                        htmlFor: 'name',
                        children: <>Name <span>*</span></>,
                    }}
                />
                <FormControl
                    inputProps={{
                        id: 'email',
                        type: 'email',
                        name: 'email',
                        tag: 'input',
                        value: email,
                        onChange: handleChange,
                        autoComplete: 'on',
                    }}
                    labelProps={{
                        htmlFor: 'email',
                        children: <>Email <span>*</span></>,
                    }}
                />
                <FormControl
                    inputProps={{
                        id: 'message',
                        name: 'message',
                        tag: 'textarea',
                        value: message,
                        onChange: handleChange,
                    }}
                    labelProps={{
                        htmlFor: 'message',
                        children: <>Message <span>*</span></>,
                    }}
                />
                {showCaptcha && <GoogleReCaptcha
                    onVerify={onVerify}
                    refreshReCaptcha={refreshReCaptcha}
                />}
                <Button type="submit" disabled={buttonDisabled} className="js-getInTouch__button fullwidth" title="Submit Form">
                    {loading ? 'Sending...' : 'Send'}
                </Button>
                {alert.show && (
                    <div className={`js-getInTouch__message ${!alert.error ? 'success' : 'error'}`}>
                        {alert.msg}
                    </div>
                )}
            </fieldset>
        </form>
    );
}

export default GetInTouchForm;
