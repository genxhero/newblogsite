require 'types/mutation_type'

class BlogsiteSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end
