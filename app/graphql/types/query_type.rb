module Types
  class QueryType < Types::BaseObject
    field :articles, [ArticleType], null: false
    def articles
      Article.all 
    end

    field :article, ArticleType, null: false do
      argument :id, Int, required: true
    end

    def article(argument)
      Article.find(argument[:id])
    end

  end #class end
end #module end 


