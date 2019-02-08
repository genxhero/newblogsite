
module Mutations
  class CreateArticle < BaseMutation
    argument :title, String, required: true
    argument :body, String, required: true
    argument :user_id, Int, required: true
    
    type Types::ArticleType

    def resolve(title: nil, body: nil, user_id: 1)
        Article.create!(
            title: title,
            body: body,
            user_id: user_id
        )
    end
  end
end