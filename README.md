# Fury Network - Cloud9 IDE
This IDE helps developers to get started with Fury Network Energy Blockchain and [STROMDAO](https://stromdao.de/) digital infrastructure.


[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/stromdao/Lobby) [![Join the chat at https://gitter.im/fury-training/Lobby](https://badges.gitter.im/fury-training/Lobby.svg)](https://gitter.im/fury-training/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) 
  
## c9.io Setup

#### Log into your c9 account 
[https://c9.io/login](https://c9.io/login)

#### Create a new Cloud9 Workspace
[https://c9.io/new](https://c9.io/new)
- Workspace name: `fury-training`
- Clone from GIT or Mercurial URL: `https://github.com/smuemd/fury-training.git`  
- Choose a Template: `Blank`

The workspace settings should look like this:
 
![set up screent](https://raw.githubusercontent.com/smuemd/fury-training/master/c9-create-workspace-screen.jpg "Set up screen")

Click `Create workspace` to launch your training environment.
Your training environment should then look like this:

![learning environment](https://raw.githubusercontent.com/smuemd/fury-training/master/c9-workspace.jpg "learning environment workspace")

#### Run the installation script
- Right-click the file `install.sh` -> `Run` 
- Select `Run` from the context menu

After installation your learning environment should  contain the following files and directories:

```
├── 01-blockchain-demo
├── 02-public-private-key-demo
├── 03-fury-material
├── node_modules
├── public
├── test
├── c9-create-workspace-screen.jpg
├── install.sh
├── LICENSE
├── package.json
├── README.md
├── server.js
└── yarn.lock

```

## Pre-Packed tools
 - [stromdao-bo-mpo](https://www.npmjs.com/package/stromdao-bo-mpo)  
Command Line tool to communicate with the Fury Network Energy Blockchain.   
Bash Console: `stromdao`   

 - [fury.network cli](https://www.npmjs.com/package/fury.network)  
Command Line tool to communicate with an IPFS backed hosting Fury Network client side apps.   
Bash Console: `fury.network`    

## Module 01 Blockchain Demo

#### Open a new terminal
Click `Window` -> `New Terminal`

#### Change into the the directory `01-blockchain-demo`
```bash
$ cd 01-blockchain-demo
```

#### Start the server
```bash
$ yarn start
```

#### Preview the running application
click `Preview` -> `Preview Running Application`

### Syllabus

#### A web-based demonstration of blockchain concepts
by Anders Brownworth
https://github.com/anders94/blockchain-demo


## Module 02 Public-Private-Key-Demo

#### Open a new comand line tab 
Click `Window` -> `New Terminal`

#### Change into the the directory `01-blockchain-demo`
```bash
$ cd 02-public-private-key-demo
```

#### Start the server
```bash
$ yarn start
```

#### Preview the running application
click `Preview` -> `Preview Running Application`

### Syllabus

####  public / private key pairs and signing in a blockchain context.
by Anders Brownworth
https://github.com/anders94/public-private-key-demo

## Module 03 Fury Network

#### Open a new comand line tab 
Click `Window` -> `New Terminal`

#### Start the application
```bash
$ yarn start
```
#### Preview the running application
click `Preview` -> `Preview Running Application`

#### Supporting documents
Find additional documents in the folder `03-fury-material`

### Syllabus

#### MeterPoint Reading
Fury URL: https://fury.network/?base=sample_mpo

#### Webuser Login
Fury URL: https://fury.network/?base=sample_login

#### Digital Asset: MeterPoint Token (Time and Power)
Fury URL: https://fury.network/?base=sample_token

#### Digital Asset: Wallet
Fury URL: https://fury.network/?base=sample_wallet

#### Distributed Ledger (Stromkonto)
Fury URL: n/a
https://www.stromkonto.net/

#### Mithril APP Development
Fury URL: n/a
https://github.com/energychain/fury.mithrill

## Links
 - [Stromkonto](https://www.stromkonto.net)
 - [Fury.Network](https://fury.network)
 


