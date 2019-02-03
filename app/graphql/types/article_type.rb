module Types
  class ArticleType < Types::BaseObject
    graphql_name "Article"
    field :id, Int, null: false
    field :created_at, DateTimeType, null: false
    field :user_id, Int, null: false
    field :title, String, null: false
    field :body, String, null: false
  end
end
