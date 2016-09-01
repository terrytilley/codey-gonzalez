class Game < ApplicationRecord

  belongs_to :user
  has_one :code

end
