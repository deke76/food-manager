# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

# create users
puts 'Creating users...'
User.destroy_all
50.times do
  User.create!({
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: '123456'
  })
end

#create locations
puts 'Creating locations...'
Location.destroy_all
20.times do
  Location.create!({
    user_id: Faker::Number.between(from: 1, to: 50),
    name: 'Home',
    street_address: Faker::Address.street_address,
    postal: Faker::Address.zip,
    province: Faker::Address.state_abbr,
    city: Faker::Address.city,
    country: Faker::Address.country_code 
  })
  Location.create!({
    user_id: Faker::Number.between(from: 1, to: 50),
    name: 'Lake',
    street_address: Faker::Address.street_address,
    postal: Faker::Address.zip,
    province: Faker::Address.state_abbr,
    city: Faker::Address.city,
    country: Faker::Address.country_code 
  })
  Location.create!({
    user_id: Faker::Number.between(from: 1, to: 50),
    name: 'Cabin',
    street_address: Faker::Address.street_address,
    postal: Faker::Address.zip,
    province: Faker::Address.state_abbr,
    city: Faker::Address.city,
    country: Faker::Address.country_code 
  })
end

#create shelves
puts 'Creating shelves...'
Shelf.destroy_all
18.times do
  Shelf.create({
    location_id: Faker::Number.between(from: 1, to: 60), 
    name: 'Pantry',
    temp: 20.0, 
    full: false
  })
  Shelf.create({
    location_id: Faker::Number.between(from: 1, to: 60), 
    name: 'Fridge',
    temp: 3.5, 
    full: false
  })
  Shelf.create({
    location_id: Faker::Number.between(from: 1, to: 60), 
    name: 'Freezer',
    temp: -18.0, 
    full: false
  })
end

# create simple foods
puts 'Creating foods...'
Food.destroy_all
50.times do
  Food.create!({
    user_id: Faker::Number.between(from: 1, to: 50),  
  name: Faker::Food.fruits,
    quantity: Faker::Number.between(from: 1, to: 6),
    quantity_units: 'each',
    price: Faker::Number.between(from: 1.0, to: 20.0).truncate(2),
    purchased: Faker::Date.backward(days: 5),
    expires: Faker::Date.forward(days: 10),
    shelf: Faker::Number.between(from: 1, to: 54)
  })
  Food.create!({
    user_id: Faker::Number.between(from: 1, to: 50),  
  name: Faker::Food.vegetables,
    quantity: Faker::Number.between(from: 1, to: 6),
    quantity_units: 'each',
    price: Faker::Number.between(from: 1.0, to: 20.0).truncate(2),
    purchased: Faker::Date.backward(days: 5),
    expires: Faker::Date.forward(days: 10),
    shelf: Faker::Number.between(from: 1, to: 54)
  })
  Food.create!({
    user_id: Faker::Number.between(from: 1, to: 50),  
  name: Faker::Food.ingredient,
    quantity: Faker::Number.between(from: 1, to: 6),
    quantity_units: 'each',
    price: Faker::Number.between(from: 1.0, to: 20.0).truncate(2),
    purchased: Faker::Date.backward(days: 5),
    expires: Faker::Date.forward(days: 10),
    shelf: Faker::Number.between(from: 1, to: 54)
  })
  Food.create!({
    user_id: Faker::Number.between(from: 1, to: 50),  
  name: Faker::Food.spice,
    quantity: Faker::Number.between(from: 1, to: 6),
    quantity_units: 'each',
    price: Faker::Number.between(from: 1.0, to: 20.0).truncate(2),
    purchased: Faker::Date.backward(days: 5),
    expires: Faker::Date.forward(days: 10),
    shelf: Faker::Number.between(from: 1, to: 54)
  })
end

# setup rails test seed data
# if Rails.env.test?
# FoodItem.create ...