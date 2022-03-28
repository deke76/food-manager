# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

# unless Rails.env.development?
#   puts "Development seeds only (for now)!"
#   exit 0
# end

# destroy current tables
User.destroy_all
Location.destroy_all
Food.destroy_all

user_id = 1
location_id = 1
food_id = 1

20.times do
  puts 'Creating user...'
  User.create!({
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: '123456'
  })

  rand(1..5).times do
    location_structure = ["Home", "Apartment", "Taco Truck", "Cabin", "Basement"].sample
    location_storage = ["Fridge", "Freezer", "Pantry", "Closet", "Cooler"].sample
    
    puts 'Creating locations...'
    Location.create!({
      user_id: user_id,
      name: "#{location_structure} - #{location_storage}",
      street_address: Faker::Address.street_address,
      postal: Faker::Address.zip,
      province: Faker::Address.state_abbr,
      city: Faker::Address.city,
      # temperature: rand(-18.0..20.0),
      country: Faker::Address.country 
    })

    rand(6..20).times do
      food_name = [Faker::Food.spice, Faker::Food.ingredient, Faker::Food.vegetables, Faker::Food.fruits].sample
      
      puts 'Creating foods...'
      Food.create!({
        user_id: user_id,  
        location_id: location_id,
        name: food_name,
        quantity: Faker::Number.between(from: 1, to: 6),
        quantity_units: 'ea',
        price_cents: Faker::Number.between(from: 100, to: 2000),
        date_purchased: Faker::Date.backward(days: 5),
        date_expires: Faker::Date.forward(days: 10),
      })

      food_id += 1
    end
    location_id += 1
  end
  user_id += 1
end

#create locations

# create simple foods

# setup rails test seed data
# if Rails.env.test?
# FoodItem.create ...