import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { FormikProps, FormikProvider, useFormik } from 'formik';

import { ISignInDto } from 'interfaces/auth.interface';
import { useAuth } from 'contexts/auth.context';
import { login, signIn } from 'requests/auth.request';
import { markInvalidFields } from 'utils/form.utils';
import { SIGN_IN_VALIDATION_SCHEMA } from 'constants/auth.constant';
import Loader from 'components/loader/loader.component';
import Input from 'components/input/input.component';
import Button from 'components/button/button.component';
import QtjFull from '../../assets/images/qtj-logo-full.png';
import Qtj from '../../assets/images/qtj.jpg';

import './auth.style.scss';

const Auth = () => {
  const params = useParams();
  const authType = params?.type as 'sign-in' | 'sign-up';
  const { t } = useTranslation();
  const { handleSetToken, handleRemoveToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const formik: FormikProps<ISignInDto> = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: SIGN_IN_VALIDATION_SCHEMA(),
    validateOnMount: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    handleRemoveToken();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    formik.validateForm().then(() => {
      if (Object.keys(formik.errors).length > 0) {
        markInvalidFields(formik, 'auth');
      } else {
        setLoading(true);
        login(formik.values)
          .then((res) => {
            console.log(res.access_token, res.refresh_token);
            handleSetToken(res.access_token, res.refresh_token);
          })
          .catch((err) => toast.error(err.response.data.detail))
          .finally(() => setLoading(false));
      }
    });
  };

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    void formik.setFieldValue(name, value, true);
  };

  return (
    <>
      <div className="auth__container">
        <div className="auth__box">
          {/* <img src={QtjFull} alt="" /> */}
          <div className="auth__form">
            <div className={'auth__form-left'}>
              <img src={Qtj} alt="" />
            </div>
            <div className={'auth__form-right'}>
              <h2>Добро пожаловать</h2>
              <FormikProvider value={formik}>
                <form onSubmit={handleSubmit} noValidate={true}>
                  <div className="form-group">
                    <label>Логин или почта</label>
                    <Input
                      formik={formik}
                      name="username"
                      value={formik.values.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Пароль</label>
                    <Input
                      formik={formik}
                      type="password"
                      name="password"
                      value={formik.values.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row">
                    <div>
                      <input type="checkbox" name="remember-me" id="remember-me" />
                      Запомнить меня
                    </div>
                    <div>Забыли пароль?</div>
                  </div>
                  <Button type="submit" primary>
                    {t('auth.signIn')}
                  </Button>
                </form>
              </FormikProvider>
            </div>
            {/* <h2>{t(`auth.title.${authType}`)}</h2> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
