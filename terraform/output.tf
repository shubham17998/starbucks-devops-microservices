output "cluster_name" {
  value = module.eks.cluster_id
}

output "kubeconfig" {
  value = module.eks.kubeconfig
}

output "ecr_user_repo" {
  value = aws_ecr_repository.user.repository_url
}

output "ecr_order_repo" {
  value = aws_ecr_repository.order.repository_url
}
