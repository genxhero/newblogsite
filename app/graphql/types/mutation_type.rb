module Types
  class MutationType < BaseObject
    field :create_article, mutation: Mutations::CreateArticle
    field :delete_article, mutation: Mutations::DeleteArticle
  end
end
