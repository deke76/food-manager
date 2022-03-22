class Foods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.text :name
      t.integer :quantity
      t.text :quantity_units
      t.float :price
      t.date :purchased
      t.date :expires
      t.integer :shelf
      t.timestamps
    end
  end
end
