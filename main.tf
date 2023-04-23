
# ###############################################################################################################################################

# Define the Git repository URL
variable "git_repo_url" {
  default = "https://github.com/DataDisruptor/AO_Art.git"
}

# Define the Docker image name and tag
variable "image_name" {
  default = "ao-art"
}

variable "docker_repo_name" {
  default = "my-repo"
}

variable "image_tag" {
  default = "v1"
}

variable "gke_num_nodes" {
  default     = 2
  description = "number of gke nodes"
}

variable "kube_service_name" {
  default = "kube-service-deployed-00"
}

# Define the GCP project ID and zone
variable "project_id" {
  default = "superb-system-382911"
}

variable "project_number" {
  default = "447996874254"
}

variable "location" {
  default = "me-west1"
}

variable "zone" {
  default = "me-west1-a"
}



terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.51.0"
    }
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

# Google Provisions and Resources - INIT

provider "google" {
  credentials = file("superb-system-382911-05cf1a1743a2.json")

  project = var.project_id
  region  = var.location
  zone    = var.zone
}

resource "google_compute_network" "vpc_network" {
  name                    = "terraform-network"
  auto_create_subnetworks = "false"
}

# Subnet
resource "google_compute_subnetwork" "subnet" {
  name          = "${var.project_id}-subnet"
  region        = var.location
  network       = google_compute_network.vpc_network.name
  ip_cidr_range = "10.10.0.0/24"
  depends_on = [
    google_compute_network.vpc_network
  ]
}

# Clone the Git repository
resource "null_resource" "git_clone" {
  provisioner "local-exec" {
    command = "git clone ${var.git_repo_url} deployed"
  }
}

# Build the Docker image
resource "null_resource" "docker_image_build" {

  provisioner "local-exec" {
    command = "cd deployed && docker build -t ${var.location}-docker.pkg.dev/${var.project_id}/${var.docker_repo_name}/${var.image_name}:${var.image_tag} ."
  }
  depends_on = [null_resource.git_clone]
}

# Docker Provisions and Resources - INIT

resource "google_artifact_registry_repository" "my-repo" {
  location      = var.location
  repository_id = var.docker_repo_name
  description   = "example docker repository"
  format        = "DOCKER"


  depends_on = [
    google_compute_network.vpc_network,
    google_compute_subnetwork.subnet
  ]

}



# resource "null_resource" "a" {
#   depends_on = [null_resource.docker_image_build]
#   provisioner "local-exec" {
#     command = "gcloud config set project ${var.project_id}"
#   }
# }

# resource "null_resource" "docker_repo" {
#   depends_on = [
#     null_resource.a
#   ]
#   provisioner "local-exec" {
#     command = "gcloud artifacts repositories create ${var.docker_repo_name} --repository-format=docker --location=${var.location} --description=\"Docker repository\""
#   }
# }

# resource "null_resource" "x" {
#   # triggers = {
#   #   docker_image_id = "${null_resource.docker_image_build.id}"
#   # }

#   # provisioner "local-exec" {
#   #   command = "gcloud auth configure-docker && docker tag ${var.image_name} gcr.io/${var.project_id}/${var.image_name}:${var.image_tag} && docker push gcr.io/${var.project_id}/${var.image_name}:${var.image_tag}"
#   # }
#   provisioner "local-exec" {
#     command = "gcloud artifacts repositories add-iam-policy-binding ${var.docker_repo_name} --location=${var.location} --member=serviceAccount:${var.project_number}-compute@developer.gserviceaccount.com --role=\"roles/artifactregistry.reader\""
#   }
#   depends_on = [
#     null_resource.docker_image_build,
#     google_compute_network.vpc_network,
#     google_artifact_registry_repository.my-repo
#   ]
# }

resource "null_resource" "y" {
  depends_on = [
    null_resource.docker_image_build,
    google_compute_network.vpc_network,
    google_artifact_registry_repository.my-repo
  ]

  provisioner "local-exec" {
    command = "gcloud auth configure-docker ${var.location}-docker.pkg.dev"
  }
}

# resource "google_artifact_registry_repository_iam_binding" "binding" {
#   project    = google_artifact_registry_repository.my-repo.project
#   location   = google_artifact_registry_repository.my-repo.location
#   repository = google_artifact_registry_repository.my-repo.id
#   role       = "roles/artifactregistry.reader"
#   members = [
#     "serviceAccount:${var.project_number}-compute@developer.gserviceaccount.com",
#   ]

#   depends_on = [
#     null_resource.y
#   ]
# }

resource "null_resource" "z" {
  depends_on = [
    # google_artifact_registry_repository_iam_binding.binding
    null_resource.y
  ]
  provisioner "local-exec" {
    command = "docker push ${var.location}-docker.pkg.dev/${var.project_id}/${var.docker_repo_name}/${var.image_name}:${var.image_tag}"
  }
}


#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   

# GKE cluster
resource "google_container_cluster" "primary" {
  name     = "${var.project_id}-gke"
  location = var.location

  # We can't create a cluster with no node pool defined, but we want to only use
  # separately managed node pools. So we create the smallest possible default
  # node pool and immediately delete it.
  remove_default_node_pool = true
  initial_node_count       = 1

  network    = google_compute_network.vpc_network.name
  subnetwork = google_compute_subnetwork.subnet.name
}

# Separately Managed Node Pool
resource "google_container_node_pool" "primary_nodes" {
  depends_on = [
    google_container_cluster.primary
  ]
  name       = google_container_cluster.primary.name
  location   = var.location
  cluster    = google_container_cluster.primary.name
  node_count = var.gke_num_nodes

  node_config {
    oauth_scopes = [
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]

    labels = {
      env = var.project_id
    }

    # preemptible  = true
    machine_type = "e2-standard-4"
    tags         = ["gke-node", "${var.project_id}-gke"]
    metadata = {
      disable-legacy-endpoints = "true"
    }
    disk_size_gb = 50
  }
}

resource "null_resource" "compute_region" {
  depends_on = [
    google_container_node_pool.primary_nodes
  ]
  provisioner "local-exec" {
    command = "gcloud config set compute/region ${var.location}"
  }
}

#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   

# Kubernetes Deploy-Scale-Expose

resource "null_resource" "kube_deploy" {
  depends_on = [
    google_container_node_pool.primary_nodes,
    null_resource.compute_region
  ]
  provisioner "local-exec" {
    command = "kubectl create deployment ${var.image_name} --image=${var.location}-docker.pkg.dev/${var.project_id}/${var.docker_repo_name}/${var.image_name}:${var.image_tag}"
  }
}

resource "null_resource" "kube_scale" {
  depends_on = [
    null_resource.kube_deploy
  ]
  provisioner "local-exec" {
    command = "kubectl scale deployment ${var.image_name} --replicas=3 && kubectl autoscale deployment ${var.image_name} --cpu-percent=80 --min=1 --max=5"
  }

}

resource "null_resource" "kube_expose" {
  depends_on = [
    null_resource.kube_scale
  ]
  provisioner "local-exec" {
    command = "kubectl expose deployment ${var.image_name} --name=${var.kube_service_name} --type=LoadBalancer --port 80 --target-port 3000 && kubectl get services"
  }
}

#############################################################################################################################################

resource "null_resource" "set_working_project" {
  provisioner "local-exec" {
    command = "gcloud config set project ${var.project_id}"
  }
}
