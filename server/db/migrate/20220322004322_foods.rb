class Foods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.integer :user_id, foreign_key: true
      t.text :name
      t.integer :quantity
      t.text :quantity_units
      t.float :price
      t.date :purchased
      t.date :expires
      t.integer :shelf_id, foreign_key: true
      t.timestamps
    end
  end
end
