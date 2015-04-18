class CreateProposals < ActiveRecord::Migration
  def change
    create_table :proposals do |t|
      t.integer :user_id
      t.string :title
      t.string :object
      t.string :finality
      t.integer :scope_id
      t.integer :subject_id
      t.timestamps
    end
  end
end
