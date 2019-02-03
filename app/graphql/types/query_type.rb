module Types
  class QueryType < Types::BaseObject
    field :articles, [ArticleType], null: false
    def articles
      Article.all 
    end
  end #class end
end #module end 
