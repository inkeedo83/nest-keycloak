import React, { useState, useEffect, useRef } from 'react';
import Keycloak from 'keycloak-js';

const client = new Keycloak({
  url: 'http://127.0.0.1:8081',
  realm: 'myrealm',
  clientId: 'myapp',
});

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    client
      .init({
        onLoad: 'login-required',
        // redirectUri: `${document.location.origin}/`,
      })
      .then((res) => {
        setLogin(res);
        setToken(client.token);
      })
      .catch((err) => console.log({ err }));
  }, []);
  console.log(token);
  return [isLogin, token];
};

export default useAuth;
