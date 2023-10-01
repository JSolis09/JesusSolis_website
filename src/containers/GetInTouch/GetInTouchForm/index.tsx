import { FC, useEffect, useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useLazyQuery } from '@apollo/client';
import { GET_CAPTCHA_KEY } from '../../../graphql/queries';
import GetInTouchForm from './GetInTouchForm';

interface GetInTouchFormContainerProps {
    getCaptcha: boolean;
}
const GetInTouchFormContainer: FC<GetInTouchFormContainerProps> = ({ getCaptcha }) => {
    const [isCaptchaRendered, setIsCaptchaRendered] = useState(false);
    const [getCaptchaQuery, { data }] = useLazyQuery<{ getCaptchaSiteKey: string }>(GET_CAPTCHA_KEY);

    useEffect(() => {
        if (getCaptcha && !isCaptchaRendered) {
            getCaptchaQuery();
            setIsCaptchaRendered(true);
        }
    }, [getCaptcha, isCaptchaRendered, getCaptchaQuery]);

    if (!data?.getCaptchaSiteKey || !getCaptcha) {
        return <GetInTouchForm disabled />;
    }

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={data.getCaptchaSiteKey}
            scriptProps={{
                appendTo: 'body',
                async: true,
                defer: true,
            }}
        >
            <GetInTouchForm disabled={false} showCaptcha />
        </GoogleReCaptchaProvider>
    );
}

export default GetInTouchFormContainer;
