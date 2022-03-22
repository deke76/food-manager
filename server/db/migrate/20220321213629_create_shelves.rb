class CreateShelves < ActiveRecord::Migration[6.1]
  def change
    create_table :shelves do |t|
      t.text :name
      t.integer :location_id, foreign_key: true
      t.float :temp
      t.boolean :full
      t.timestamps
    end
  end
end
