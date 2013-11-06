class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
        t.integer :id
        t.string :body
        t.string :message
        t.boolean :is_read?
        t.timestamps
    end
  end
end