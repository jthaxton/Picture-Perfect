class Picture < ApplicationRecord
  validate :ensure_photo
  validates :body, length: {maximum: 140}

  has_one_attached :photo

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_many :comments,
  foreign_key: :picture_id,
  class_name: :Comment

  has_many :profiles,
  foreign_key: :picture_id,
  class_name: :Profile


  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
  end
