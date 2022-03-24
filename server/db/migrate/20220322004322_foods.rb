class Foods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.integer :location_id, foreign_key: true
      t.text :name
      t.integer :spoon_id
      t.integer :quantity
      t.text :quantity_units
      t.integer :price_cents
      t.date :date_purchased
      t.date :date_expires
      t.timestamps
    end
  end
end
