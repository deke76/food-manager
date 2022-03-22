class FoodsController < ApplicationController
  def index
    @foods = Foods.all
  end
  
  def reset_database
    tables = ActiveRecord::Base.connection.tables
    tables.delete 'schema.migrations'
    tables.each do |table|
      ActiveRecord::Base.connection.execute("TRUNCATE #{table}")
    end
    Rails.application.load_seed if params['seed'] == true
  end
end
