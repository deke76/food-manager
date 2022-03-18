# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

puts 'Re-creating food items'

FoodItem.destroy_all

FoodItem.create({
  name: 'Milk',
  quantity: '1',
  quantity_units: 'each',
  price: '4.29',
  purchased: '2022-02-14',
  expires: '2022-02-25'
})

FoodItem.create({
  name: 'Cheddar',
  quantity: '1',
  quantity_units: 'each',
  price: '8.49',
  purchased: '2022-02-14',
  expires: '2022-04-25'
})

FoodItem.create({
  name: 'Banana',
  quantity: '6',
  quantity_units: 'each',
  price: '0.45',
  purchased: '2022-03-01',
  expires: '2022-03-08'
})

FoodItem.create({
  name: 'Mushroom Soup',
  quantity: '1',
  quantity_units: 'each',
  price: '1.29',
  purchased: '2022-02-14',
  expires: '2023-02-14'
})