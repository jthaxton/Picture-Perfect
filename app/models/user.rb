class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :prof_pic_id, required: false
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :pictures,
           foreign_key: :user_id,
           class_name: :Picture

  has_many :follows,
           foreign_key: :follower_id,
           class_name: :Follow

  has_many :followees,
           foreign_key: :followee_id,
           class_name: :Follow

  has_many :followers,
           foreign_key: :follower_id,
           class_name: :Follow
           
  has_many :comments,
           foreign_key: :user_id,
           class_name: :Comment

  has_one :prof_pic,
          foreign_key: :prof_pic_id,
          class_name: :Picture

  has_one :background_pic,
          foreign_key: :background_pic_id,
          class_name: :Picture

  has_many :affection

  def self.find_by_credentials(username, password)
    @user = User.find_by_username(username)
    if @user && @user.is_password?(password)
      @user
    else
      nil
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
