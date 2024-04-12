export interface userDataObj {
  userName: string;
  userProfile: string;
  accountBalance: string;
  accountBills: string;
  accountActives: string;
  accountPassives: string;
}

export let DOM = document;


export function DataHandling() {
  DOM.addEventListener("DOMContentLoaded", (e) => {
    // GettingData
    const userName = localStorage.getItem("username") || "user_name";
    const AccountBalance = localStorage.getItem("accountBalance") || "error getting Data";
    const AccountActives = localStorage.getItem("accountActives") || "error getting Data";
    const AccountBillsStats = localStorage.getItem("accountBills") || "error getting Data";
    const AccountPassives = localStorage.getItem("accountPassives") || "error gettind Data";

    //  FormSetting
    const userNameSpan = DOM.getElementById("userName");
    const AccountBalanceStats = DOM.getElementById("AccountBalanceStats");
    const BillsCardStats = DOM.getElementById("BillsCardStats");
    const AccountActivesStats = DOM.getElementById("AccountActivesStats");
    const AccountPassivesStats = DOM.getElementById("AccountPassivesStats");

    userNameSpan.textContent = `${userName}`;
    AccountBalanceStats.textContent = `${AccountBalance}`;
    AccountActivesStats.textContent = `${AccountActives}`;
    BillsCardStats.textContent = `${AccountBillsStats}`;
    AccountPassivesStats.textContent = `${AccountPassives}`;
  });
}

export function updateData() {

    const USERNAME = (DOM.getElementById('username') as HTMLInputElement).value;
    const EMPLOYEES = (DOM.getElementById('employees') as HTMLInputElement).value;
    const IMAGEURL = (DOM.getElementById('imageUrl') as HTMLInputElement).value;

    localStorage.setItem('username', USERNAME);
    localStorage.setItem('employees', EMPLOYEES);
    localStorage.setItem('imageurl', IMAGEURL);

    
}