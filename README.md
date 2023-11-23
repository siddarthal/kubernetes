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
# Kubernetes Concepts

## Pods
- Smallest deployable units that hold one or more containers
- Ephemeral in nature, can be destroyed and replicated easily
- Good for horizontally scaling stateless apps

## Deployments
- Declares the desired state for pods, such as # of replicas
- Rolls out updates to pods in a controlled way
- Helps rollback to previous versions easily 

## Services
- Provides networking between group of pods
- Defines a policy to access the pods
- Enable loose coupling between pods

## Ingress
- Exposes HTTP and HTTPS routes from outside the cluster
- Traffic routing to services based on URL rules
- Provides load balancing, SSL termination, name-based routing

## ConfigMaps & Secrets
- External configuration of pods
- Store non-confidential (ConfigMaps) and confidential (Secrets) data
- Consumed via environment vars or volumes

# Commands# Create Kubernetes cluster
k3d cluster create -a 2  

# List cluster nodes
docker ps

# Stop cluster  
k3d cluster stop

# Start cluster
k3d cluster start 

# Delete cluster
k3d cluster delete

# Get cluster info
kubectl cluster-info  

# Explain Kubernetes resource
kubectl explain pod

# List all objects of a resource  
kubectl get pods

# Create a deployment
kubectl create deployment <name> --image=<image>

# View a deployment
kubectl describe deployment <name> 

# List deployments
kubectl get deployments 

# Edit a deployment
kubectl edit deployment <name>

# Scale a deployment  
kubectl scale deployment <name> --replicas=<number>  

# Rollout deployment changes
kubectl rollout restart deployment <name>

# Undo deployment changes
kubectl rollout undo deployment <name> 

# Delete deployment  
kubectl delete deployment <name>
