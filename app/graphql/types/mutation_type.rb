module Types
  class MutationType < BaseObject
    field :create_user, mutation: Mutations::CreateUser
    field :create_article, mutation: Mutations::CreateArticle
    field :delete_article, mutation: Mutations::DeleteArticle
  end
end
