# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    User.delete_all
    Picture.delete_all

    user1 = User.create!(username: 'Jerry Seinfeld', password: '1234567')
    user2 = User.create!(username: 'George Constanza', password: '23094578')
    user3 = User.create!(username: "Cosmo Kramer", password: '39034705')

    picture = Picture.new(user_id: user1.id, body: 'WHAT THE DEAL WITH TRAFFIC')
    file = EzDownload.open('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-0.3.5&s=213bb0e97848618dfc895b1bb596d330&auto=format&fit=crop&w=2126&q=80')
    picture.photo.attach(io: file, filename: 'traffic.jpg')
    picture.save!


    picture = Picture.new(user_id: user2.id, body: 'What if Seinfeld was still on tv with new episodes?')
    file = EzDownload.open('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-0.3.5&s=213bb0e97848618dfc895b1bb596d330&auto=format&fit=crop&w=2126&q=80')
    picture.photo.attach(io: file, filename: 'city.jpg')
    picture.save!


    picture = Picture.new(user_id: user3.id, body: 'These pretzels are making me thirsty!')
    file = EzDownload.open('https://images.unsplash.com/photo-1483908514687-d25c79c15df0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d14492f4c068f54295b1fe041655531&auto=format&fit=crop&w=1350&q=80')
    picture.photo.attach(io: file, filename: 'pretzels.jpg')
    picture.save!

    picture = Picture.new(user_id: user3.id, body: 'Giddiup!')
    file = EzDownload.open('https://images.unsplash.com/photo-1534307250431-ef2530a9d8c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6fe748b44cfa8f77d489399a7978f1fa&auto=format&fit=crop&w=634&q=80')
    picture.photo.attach(io: file, filename: 'horses.jpg')
    picture.save!
