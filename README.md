Happy Debugging!!

## We need kubectl and k3s.
### First we will go with kubectl later k3s
### Download the latest release with the command:
```sh
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```
### Install kubectl
```sh
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```
Test to ensure the version you installed is up-to-date:
```bash
kubectl version --client
```
## k3s installation
use the install script to grab the latest release:

### wget: 
```sh 
wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash
```
### curl: 
```sh
curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash
```
