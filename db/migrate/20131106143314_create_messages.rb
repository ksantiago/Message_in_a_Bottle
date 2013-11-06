class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
        t.integer :id
        t.string :body
        t.string :message
        t.is_read :boolean
        t.timestamps
    end
  end
end