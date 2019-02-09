module Types
  class MutationType < BaseObject
    field :create_user, mutation: Mutations::CreateUser
    field :signin_user, mutation: Mutations::SignInUser
    field :create_article, mutation: Mutations::CreateArticle
    field :delete_article, mutation: Mutations::DeleteArticle
  end
end
