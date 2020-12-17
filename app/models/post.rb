class Post < ApplicationRecord
  has_one_attached :image

  validates :title, :description, presence: true
  validates :image, attached: true, content_type: ['image/png', 'image/jpg', 'image/jpeg']
end
