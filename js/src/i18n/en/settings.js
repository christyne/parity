// Copyright 2015, 2016 Ethcore (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

export default {
  label: 'settings',

  background: {
    label: 'background',

    overview_0: 'The background pattern you can see right now is unique to your Parity installation. It will change every time you create a new Signer token. This is so that decentralized applications cannot pretend to be trustworthy.',
    overview_1: 'Pick a pattern you like and memorize it. This Pattern will always be shown from now on, unless you clear your browser cache or use a new Signer token.',

    button_more: 'generate more'
  },

  parity: {
    label: 'parity',

    overview_0: 'Control the Parity node settings and mode of operation via this interface.',

    languages: {
      label: 'UI language',
      hint: 'the language this interface is displayed with',

      language_en: 'English',
      language_de: 'German'
    },

    modes: {
      label: 'mode of operation',
      hint: 'the syning mode for the Parity node',

      mode_active: 'Parity continuously syncs the chain',
      mode_passive: 'Parity syncs initially, then sleeps and wakes regularly to resync',
      mode_dark: 'Parity syncs only when the RPC is active',
      mode_offline: "Parity doesn't sync"
    }
  },

  proxy: {
    label: 'proxy',

    overview_0: 'The proxy setup allows you to access Parity and all associated decentralized applications via memorable addresses.',

    details_0: 'Instead of accessing Parity via the IP address and port, you will be able to access it via the .parity subdomain, by visiting ',
    details_1: '. To setup subdomain-based routing, you need to add the relevant proxy entries to your browser,',
    details_2: 'To learn how to configure the proxy, instructions are provided for ',
    details_windows: 'Windows',
    details_3: ', ',
    details_macos: 'macOS',
    details_4: ' or ',
    details_ubuntu: 'Ubuntu'
  },

  views: {
    label: 'views',

    overview_0: 'Manage the available application views, using only the parts of the application that is applicable to you.',
    overview_1: 'Are you an end-user? The defaults are setups for both beginner and advanced users alike.',
    overview_2: 'Are you a developer? Add some features to manage contracts are interact with application deployments.',
    overview_3: 'Are you a miner or run a large-scale node? Add the features to give you all the information needed to watch the node operation.',

    accounts: {
      label: 'Accounts',
      description: 'A list of all the accounts associated to and imported into this Parity instance. Send transactions, receive incoming values, manage your balances and fund your accounts.'
    },
    addresses: {
      label: 'Addressbook',
      description: 'A list of all contacts and address book entries that is managed by this Parity instance. Watch accounts and have the details available at the click of a button when transacting.'
    },
    apps: {
      label: 'Applications',
      description: 'Distributed applications that interact with the underlying network. Add applications, manage you application portfolio and interact with application from around the network.'
    },
    contracts: {
      label: 'Contracts',
      description: 'Watch and interact with specific contracts that have been deployed on the network. This is a more technically-focused environment, specifically for advanced users that understand the inner working of certain contracts.'
    },
    status: {
      label: 'Status',
      description: 'See how the Parity node is performing in terms of connections to the network, logs from the actual running instance and details of mining (if enabled and configured).'
    },
    signer: {
      label: 'Signer',
      description: 'The secure transaction management area of the application where you can approve any outgoing transactions made from the application as well as those placed into the queue by distributed applications.'
    },
    settings: {
      label: 'Settings',
      description: 'This view. Allows you to customize the application in term of options, operation and look and feel.'
    }
  }
};
