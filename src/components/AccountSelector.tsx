import React from 'react';

const AccountSelector: React.FC = () => {
  return (
    <div>
      <h2>Select Account Type</h2>
      <label>
        <input type="radio" name="accountType" /> Official Account
      </label>
      <label>
        <input type="radio" name="accountType" /> Cracked Account
      </label>
    </div>
  );
};

export default AccountSelector;