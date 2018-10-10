class User < ApplicationRecord
  validates :username, null: false, uniqueness: true
  validates :session_token, null: false, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  has_many :pictures
  has_many :follows
  has_many :affection

  def self.find_by_credentials(username, password)
    @user = self.User.find_by_username(username)
    if @user && is_password?(password)
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
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end


end
