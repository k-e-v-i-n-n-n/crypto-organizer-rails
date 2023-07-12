class User < ApplicationRecord
    has_secure_password
    has_many :currencies
    validates :user_name, uniqueness: true, presence: true

end
