class AddUserIdToShelves < ActiveRecord::Migration[6.1]
  def change
    add_column :shelves, :user_id, :integer
  end
end
