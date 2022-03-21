class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.integer :user_id, foreign_key: true
      t.text :name
      t.text :street_address
      t.text :postal
      t.text :province
      t.text :city
      t.text :country
      t.timestamps
    end
  end
end
