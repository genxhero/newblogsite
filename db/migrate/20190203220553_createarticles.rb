class Createarticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.text :body, null: false
      t.string :title, null: false
      t.integer :user_id, null: false
      t.timestamps  
    end
    add_index :articles, :title
    add_index :articles, :user_id
  end
end
