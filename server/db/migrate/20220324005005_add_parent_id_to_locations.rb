class AddParentIdToLocations < ActiveRecord::Migration[6.1]
  def change
    add_column :locations, :parent_id, :integer
  end
end
