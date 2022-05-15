import { ReactSession } from "react-client-session";

const getAccountAddress = () => {
  ReactSession.setStoreType("sessionStorage");
  const currentAccount = ReactSession.get("currentAccount");
  return currentAccount;
};

export { getAccountAddress };
