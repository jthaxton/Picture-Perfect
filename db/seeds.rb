# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    User.delete_all
    Picture.delete_all
    Comment.delete_all

    user1 = User.create!(username: 'Jerry Seinfeld', password: '1234567')
    user2 = User.create!(username: 'George Constanza', password: '23094578')
    user3 = User.create!(username: "Cosmo Kramer", password: '39034705')
    user4 = User.create!(username: 'joe', password: '123456')
    user5 = User.create!(username: "Elaine Benes", password: '39034705')


    picture = Picture.new(user_id: user1.id, body: 'WHAT THE DEAL WITH TRAFFIC')
    file = EzDownload.open('https://images.unsplash.com/photo-1538208576141-8d3dfcfb7b0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a52c26bb05e049426b40671a9d7dacc2&auto=format&fit=crop&w=634&q=80')
    picture.photo.attach(io: file, filename: 'traffic.jpg')
    picture.save!


    picture = Picture.new(user_id: user1.id, body: 'What if Seinfeld was still on tv with new episodes?')
    file = EzDownload.open('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-0.3.5&s=213bb0e97848618dfc895b1bb596d330&auto=format&fit=crop&w=2126&q=80')
    picture.photo.attach(io: file, filename: 'city.jpg')
    picture.save!


    picture = Picture.new(user_id: user2.id, body: 'These pretzels are making me thirsty!')
    file = EzDownload.open('https://images.unsplash.com/photo-1483908514687-d25c79c15df0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d14492f4c068f54295b1fe041655531&auto=format&fit=crop&w=1350&q=80')
    picture.photo.attach(io: file, filename: 'pretzels.jpg')
    picture.save!

    picture = Picture.new(user_id: user3.id, body: 'Giddiup!')
    file = EzDownload.open('https://images.unsplash.com/photo-1534307250431-ef2530a9d8c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6fe748b44cfa8f77d489399a7978f1fa&auto=format&fit=crop&w=634&q=80')
    picture.photo.attach(io: file, filename: 'horses.jpg')
    picture.save!

    picture = Picture.new(user_id: user4.id, body: 'You jelly?')
    file = EzDownload.open('https://images.unsplash.com/photo-1512073576841-2a8b33aef5f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b685412bb44088aa9b87e9972c4a437e&auto=format&fit=crop&w=2134&q=80')
    picture.photo.attach(io: file, filename: 'jellyfish.jpg')
    picture.save!

    picture = Picture.new(user_id: user4.id, body: 'Deep thoughts...')
    file = EzDownload.open('https://images.unsplash.com/photo-1500753170193-d065d5faf580?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a6300130c7cf25bb847a7876b9c0546&auto=format&fit=crop&w=634&q=80')
    picture.photo.attach(io: file, filename: 'deep_thoughts.jpg')
    picture.save!

    picture = Picture.new(user_id: user4.id, body: 'Restless city')
    file = EzDownload.open('https://images.unsplash.com/photo-1516556294316-055e8753eb69?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=65a5cfe51d9ac4dd8ac990cdf0114beb&auto=format&fit=crop&w=634&q=80')
    picture.photo.attach(io: file, filename: 'big_city.jpg')
    picture.save!

    picture = Picture.new(user_id: user4.id, body: 'Beautiful moon')
    file = EzDownload.open('https://images.unsplash.com/photo-1517420878257-463729f65889?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b84f1bbee55b70460027ba6bad3c2099&auto=format&fit=crop&w=700&q=80')
    picture.photo.attach(io: file, filename: 'moon.jpg')
    picture.save!
