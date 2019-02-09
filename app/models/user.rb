class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true 
    validates :email, presence: true, uniqueness: true

    has_many :articles,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Article"
end
