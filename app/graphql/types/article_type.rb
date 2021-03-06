module Types
  class ArticleType < Types::BaseObject
    graphql_name "Article"
    field :id, Int, null: false
    field :created_at, DateTimeType, null: false
    field :author, UserType, null: false, method: :user
    field :title, String, null: false
    field :body, String, null: false
  end
end
