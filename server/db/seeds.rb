# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

# create simple foods
puts 'Re-creating food items'
FoodItem.destroy_all

FoodItem.create({name: 'Milk', quantity: '1', quantity_units: 'each', price: '4.29', purchased: '2022-02-14', expires: '2022-02-25'})
FoodItem.create({name: 'Cheddar', quantity: '1', quantity_units: 'each', price: '8.49', purchased: '2022-02-14', expires: '2022-04-25'})
FoodItem.create({name: 'Banana',quantity: '6',quantity_units: 'each',price: '0.45',purchased: '2022-03-01',expires: '2022-03-08'})
FoodItem.create({name: 'Mushroom Soup',quantity: '1',quantity_units: 'each',price: '1.29',purchased: '2022-02-14',expires: '2023-02-14'})

# create users
puts 'Creating users...'
User.destroy_all
User.create({first_name: "Riley", last_name: "Paul", email: "rileypaul96@gmail.com", password: '123456'})
User.create({first_name: "Stanislav", last_name: "Plotnick", email: "splotnikov74@gmail.com", password: "123456"})
User.create({first_name: "Darcy", last_name: "Lauder", email: "darcy.lauder@shaw.ca", password: "123456"})

#create locations
Location.destroy_all
Location.create({user_id: 1, name: 'Home' })
Location.create({user_id: 1, name: 'Cabin' })
Location.create({user_id: 2, name: 'Lake' })
Location.create({user_id: 3, name: 'Home' })

#create shelves
Shelf.destroy_all
Shelf.create({location_id: 1, name: 'Fridge', full: false})
Shelf.create({location_id: 2, name: 'Pantry', full: false})
Shelf.create({location_id: 3, name: 'Fridge', full: false})
Shelf.create({location_id: 3, name: 'Freezer', full: false})

# setup rails test seed data
# if Rails.env.test?
# FoodItem.create ...