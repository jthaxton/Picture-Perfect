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
    user6 = User.create!(username: "Newman", password: '12341234')
    user7 = User.create!(username: "Rachel Green", password: '2310946213')


    picture1 = Picture.new(user_id: user1.id, body: 'WHAT THE DEAL WITH TRAFFIC')
    file = EzDownload.open('https://images.unsplash.com/photo-1538208576141-8d3dfcfb7b0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a52c26bb05e049426b40671a9d7dacc2&auto=format&fit=crop&w=634&q=80')
    picture1.photo.attach(io: file, filename: 'traffic.jpg')
    picture1.save!

    picture2 = Picture.new(user_id: user1.id, body: 'What if Seinfeld was still on tv with new episodes?')
    file = EzDownload.open('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-0.3.5&s=213bb0e97848618dfc895b1bb596d330&auto=format&fit=crop&w=2126&q=80')
    picture2.photo.attach(io: file, filename: 'city.jpg')
    picture2.save!

    picture3 = Picture.new(user_id: user2.id, body: 'These pretzels are making me thirsty!')
    file = EzDownload.open('https://images.unsplash.com/photo-1483908514687-d25c79c15df0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d14492f4c068f54295b1fe041655531&auto=format&fit=crop&w=1350&q=80')
    picture3.photo.attach(io: file, filename: 'pretzels.jpg')
    picture3.save!

    picture4 = Picture.new(user_id: user3.id, body: 'Giddiup!')
    file = EzDownload.open('https://images.unsplash.com/photo-1534307250431-ef2530a9d8c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6fe748b44cfa8f77d489399a7978f1fa&auto=format&fit=crop&w=634&q=80')
    picture4.photo.attach(io: file, filename: 'horses.jpg')
    picture4.save!

    picture5 = Picture.new(user_id: user4.id, body: 'You jelly?')
    file = EzDownload.open('https://images.unsplash.com/photo-1512073576841-2a8b33aef5f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b685412bb44088aa9b87e9972c4a437e&auto=format&fit=crop&w=2134&q=80')
    picture5.photo.attach(io: file, filename: 'jellyfish.jpg')
    picture5.save!

    picture6 = Picture.new(user_id: user4.id, body: 'Deep thoughts...')
    file = EzDownload.open('https://images.unsplash.com/photo-1500753170193-d065d5faf580?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a6300130c7cf25bb847a7876b9c0546&auto=format&fit=crop&w=634&q=80')
    picture6.photo.attach(io: file, filename: 'deep_thoughts.jpg')
    picture6.save!

    picture7 = Picture.new(user_id: user4.id, body: 'Restless city')
    file = EzDownload.open('https://images.unsplash.com/photo-1516556294316-055e8753eb69?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=65a5cfe51d9ac4dd8ac990cdf0114beb&auto=format&fit=crop&w=634&q=80')
    picture7.photo.attach(io: file, filename: 'big_city.jpg')
    picture7.save!


    picture9 = Picture.new(user_id: user5.id, body: "I'm speechless. I'm without speech.")
    file = EzDownload.open('https://images.unsplash.com/photo-1543429467-2697dbedaa1c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c71680612a55aacb5e963a1ea3c4d46&auto=format&fit=crop&w=634&q=80')
    picture9.photo.attach(io: file, filename: 'pic.jpg')
    picture9.save!

    picture10 = Picture.new(user_id: user5.id, body: "City pic!")
    file = EzDownload.open('https://images.unsplash.com/photo-1543448360-df44028397bd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c78292968d30ab8fd5b188fbaea4dccf&auto=format&fit=crop&w=1350&q=80')
    picture10.photo.attach(io: file, filename: 'city.jpg')
    picture10.save!

    picture11 = Picture.new(user_id: user6.id, body: "I deserve this.")
    file = EzDownload.open('https://images.unsplash.com/photo-1543414888-33c11c507629?ixlib=rb-0.3.5&s=93ea7c2df5ea90fc2fc87e36859a2881&auto=format&fit=crop&w=1267&q=80')
    picture11.photo.attach(io: file, filename: 'a.jpg')
    picture11.save!

    picture12 = Picture.new(user_id: user2.id, body: "From my photography class")
    file = EzDownload.open('https://images.unsplash.com/photo-1543428994-15e7df56a5a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a519147afeb5734eb6e2896f06d22d1&auto=format&fit=crop&w=700&q=80')
    picture12.photo.attach(io: file, filename: 'bridge.jpg')
    picture12.save!

    picture13 = Picture.new(user_id: user1.id, body: "Winter in NY be like")
    file = EzDownload.open('https://images.unsplash.com/photo-1543470388-80a8f5281639?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be66e426a8f2052c31004464663dcfe4&auto=format&fit=crop&w=2134&q=80')
    picture13.photo.attach(io: file, filename: 'ice.jpg')
    picture13.save!

    picture14 = Picture.new(user_id: user3.id, body: "What if Seinfeld in desert?")
    file = EzDownload.open('https://images.unsplash.com/photo-1543362138-f2fa5df1f2d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e492a0e26581fe02e9462fca6f061c2&auto=format&fit=crop&w=634&q=80')
    picture14.photo.attach(io: file, filename: 'desert.jpg')
    picture14.save!

    picture15 = Picture.new(user_id: user6.id, body: "City pic?")
    file = EzDownload.open('https://images.unsplash.com/photo-1543372515-8650c874e983?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=84e613b0af3114ace06738934353aa56&auto=format&fit=crop&w=1350&q=80')
    picture15.photo.attach(io: file, filename: 'picofcity.jpg')
    picture15.save!


    picture16 = Picture.new(user_id: user4.id, body: 'Beautiful moon')
    file = EzDownload.open('https://images.unsplash.com/photo-1517420878257-463729f65889?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b84f1bbee55b70460027ba6bad3c2099&auto=format&fit=crop&w=700&q=80')
    picture16.photo.attach(io: file, filename: 'moon.jpg')
    picture16.save!

    comment1 = Comment.new(user_id: user2.id,picture_id: picture1.id, comment: "Did you copy my post?")
    comment1.save!

    comment2 = Comment.new(user_id: user3.id,picture_id: picture1.id, comment: "Giddiup")
    comment2.save!

    comment3 = Comment.new(user_id: user1.id,picture_id: picture1.id, comment: "KRAMER")
    comment3.save!

    comment4 = Comment.new(user_id: user5.id,picture_id: picture1.id, comment: "Great pic")
    comment4.save!

    comment5 = Comment.new(user_id: user6.id,picture_id: picture2.id, comment: "Hello Jerry...")
    comment5.save!

    comment6 = Comment.new(user_id: user1.id,picture_id: picture2.id, comment: "Hello Newman...")
    comment6.save!

    comment7 = Comment.new(user_id: user5.id,picture_id: picture12.id, comment: "You're not hip, George")
    comment7.save!

    comment8 = Comment.new(user_id: user2.id,picture_id: picture12.id, comment: "George is getting upset!")
    comment8.save!

    comment9 = Comment.new(user_id: user7.id,picture_id: picture12.id, comment: "Oh, wow, hey! I think I'm on the wrong site!")
    comment9.save!

    comment11 = Comment.new(user_id: user3.id,picture_id: picture10.id, comment: "LOL you broke the fence?")
    comment11.save!

    comment12 = Comment.new(user_id: user5.id,picture_id: picture13.id, comment: "Want to grab some soup?")
    comment12.save!

    comment13 = Comment.new(user_id: user1.id,picture_id: picture13.id, comment: "@Elaine Sure, but aren't you banned for the year?")
    comment13.save!