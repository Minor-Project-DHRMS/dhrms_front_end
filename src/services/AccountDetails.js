import { ReactSession } from "react-client-session";

const getAccountAddress = () => {
  ReactSession.setStoreType("sessionStorage");

  let currentAccount = null;
  try {
    currentAccount = ReactSession.get("currentAccount");
  } catch (error) {
    currentAccount = 0;
  }
  return currentAccount;
};

export { getAccountAddress };
