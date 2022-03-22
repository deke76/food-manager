class DeleteFoodItems < ActiveRecord::Migration[6.1]
  def change
    drop_table :food_items
  end
end
