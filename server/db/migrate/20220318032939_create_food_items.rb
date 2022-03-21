class CreateFoodItems < ActiveRecord::Migration[6.1]
  def change
    create_table :food_items do |t|
      t.text :name
      t.integer :quantity
      t.text :quantity_units
      t.float :price
      t.date :purchased
      t.date :expires
      t.timestamps
    end
  end
end
