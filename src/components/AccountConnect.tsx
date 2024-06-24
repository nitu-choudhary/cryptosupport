import React from 'react';
import { Avatar } from '@coinbase/onchainkit/identity';
import { ConnectAccount } from '@coinbase/onchainkit/wallet';
import { useAccount, useDisconnect } from 'wagmi';

const AccountConnect: React.FC = () => {
  const { address, status } = useAccount();
  const { disconnect } = useDisconnect();
  
  return (
    <div className="flex items-center">
      { status === 'disconnected' ? (
           <ConnectAccount/>
      ) : ( 
        address && (
          <div className="inline-flex items-center bg-white justify-center">
              <button
                type="button"
                onClick={() => disconnect()}
                className="bg-white inline-flex items-center justify-center gap-2 rounded-3xl px-4 py-2 h-10"
              >
                <Avatar address={address} className="bg-white"/>
                <span className="ml-2 text-blue-500 hover:text-blue-700 bg-white">Disconnect</span>
              </button>
          </div>
        )
      )}
    </div>
  );
};

export default  AccountConnect;
